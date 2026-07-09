import { useEffect, useRef } from "react";

type Point = [number, number, number];

/** Rough continent test via lat/lon ellipse checks (degrees; lon in -180..180). */
function isLand(lat: number, lon: number): boolean {
  const inEll = (
    clat: number,
    clon: number,
    rlat: number,
    rlon: number,
  ): boolean => {
    let dlon = lon - clon;
    if (dlon > 180) dlon -= 360;
    if (dlon < -180) dlon += 360;
    const a = (lat - clat) / rlat;
    const b = dlon / rlon;
    return a * a + b * b <= 1;
  };
  return (
    inEll(52, -100, 18, 32) || // North America
    inEll(66, -42, 9, 14) || // Greenland
    inEll(20, -100, 9, 11) || // Mexico / Central America
    inEll(-12, -58, 24, 16) || // South America
    inEll(12, 20, 22, 24) || // North & Central Africa
    inEll(-20, 25, 15, 13) || // Southern Africa
    inEll(52, 30, 14, 40) || // Europe / western Russia
    inEll(60, 100, 14, 42) || // Siberia
    inEll(32, 92, 14, 26) || // China / Central Asia
    inEll(20, 78, 12, 8) || // India
    inEll(2, 112, 8, 16) || // SE Asia / Indonesia
    inEll(-25, 134, 11, 15) || // Australia
    inEll(36, 138, 5, 6) || // Japan
    inEll(27, 45, 8, 10) // Middle East / Arabia
  );
}

export default function Globe({ speed = 5 }: { speed?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const DPR = window.devicePixelRatio || 1;

    // Build the point cloud once: dense grid split into land vs ocean.
    const land: Point[] = [];
    const ocean: Point[] = [];
    for (let lat = -85; lat <= 85; lat += 2.6) {
      const step = 2.6 / Math.max(0.25, Math.cos((lat * Math.PI) / 180));
      for (let lon = -180; lon < 180; lon += step) {
        const phi = (lat * Math.PI) / 180;
        const theta = (lon * Math.PI) / 180;
        const p: Point = [
          Math.cos(phi) * Math.cos(theta),
          Math.sin(phi),
          Math.cos(phi) * Math.sin(theta),
        ];
        (isLand(lat, lon) ? land : ocean).push(p);
      }
    }

    let rot = 0;
    let last = performance.now();
    let raf = 0;

    const draw = (now: number) => {
      const spd = speed * 0.0032; // radians/sec-ish
      rot += (now - last) * 0.001 * spd * 60;
      last = now;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== w * DPR || canvas.height !== h * DPR) {
        canvas.width = w * DPR;
        canvas.height = h * DPR;
      }
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const R = Math.min(w, h * 2) * 0.46;
      const cx = w / 2;
      const cy = R * 0.14 + h * 0.08 + R * 0.86; // globe center slightly below view
      const tilt = -0.35;
      const sinT = Math.sin(tilt);
      const cosT = Math.cos(tilt);
      const sinR = Math.sin(rot);
      const cosR = Math.cos(rot);

      const plot = (pts: Point[], color: string, size: number) => {
        ctx.fillStyle = color;
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];
          // rotate around Y
          const x = p[0] * cosR + p[2] * sinR;
          const z = -p[0] * sinR + p[2] * cosR;
          // tilt around X
          const y = p[1] * cosT - z * sinT;
          const z2 = p[1] * sinT + z * cosT;
          if (z2 < -0.05) continue; // back hemisphere hidden
          const px = cx + x * R;
          const py = cy - y * R;
          if (py < -8 || py > h + 8) continue;
          const s = size * (0.55 + 0.45 * z2);
          ctx.globalAlpha = 0.25 + 0.75 * Math.max(0, z2);
          ctx.fillRect(px - s / 2, py - s / 2, s, s);
        }
        ctx.globalAlpha = 1;
      };

      plot(ocean, "#C9C4B8", 1.6);
      plot(land, "#0D2A52", 2.6);
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  return <canvas ref={canvasRef} className="hero__globe" />;
}
