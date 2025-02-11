import { ImageResponse } from "next/og";
import LogoIcon from "./components/LogoIcon"

export const runtime = "edge"

export const size = {
  width: 32,
  height: 32,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "20%",
      }}
    >
      <LogoIcon style={{ width: "80%", height: "80%" }} />
    </div>,
    {
      ...size,
    },
  )
}

