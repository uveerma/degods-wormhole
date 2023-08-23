import { WormholeLogo } from "@/components/icons";
import satori from "satori";

const generateSvg = async (image: string) => {
  const imageBlob = await fetch(image).then((res) => res.blob());

  const svg = await satori(
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(https://res.cloudinary.com/ddum5vpp3/image/upload/v1680113575/photo_4983718250726665167_y_qcgvpd.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={URL.createObjectURL(imageBlob)}
        alt="nft haha"
        style={{
          borderRadius: "50%",
        }}
        width="90%"
        height="90%"
      />
    </div>,
    {
      width: 474,
      height: 474,
      fonts: [],
    }
  );

  return svg;
};

export { generateSvg };
