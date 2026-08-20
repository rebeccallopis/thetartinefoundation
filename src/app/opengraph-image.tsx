import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F8F3E8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 128, fontWeight: 800 }}>
          <span style={{ color: "#F26F55" }}>t</span>
          <span style={{ color: "#F6B83F" }}>ART</span>
          <span style={{ color: "#E9848F" }}>ine</span>
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#56B9AF", fontWeight: 700, marginTop: 16 }}>
          Explore. Experiment. Create.
        </div>
      </div>
    ),
    { ...size },
  );
}
