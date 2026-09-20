import { ImageResponse } from "next/og";
import { site } from "@/data/portfolio";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#3346F0",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", width: 72, height: 72, borderRadius: 36, background: "#FFC233" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 120, fontWeight: 800, lineHeight: 1 }}>{site.name}</div>
          <div style={{ display: "flex", fontSize: 44, marginTop: 20 }}>{site.role}</div>
        </div>
      </div>
    ),
    size,
  );
}
