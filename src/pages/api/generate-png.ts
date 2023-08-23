import { generateSvg } from "@/utils/helpers/generate";
import { NextApiHandler } from "next";
import sharp from "sharp";

const handler: NextApiHandler = async (req, res) => {
  const { image } = req.query;

  if (!image) {
    res.status(400).send("Missing image parameter");
    return;
  }

  const svg = await generateSvg(image as string);
  const buffer = await sharp(Buffer.from(svg)).png().toBuffer();

  res.setHeader("Content-Type", "image/png");
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  res.status(200).send(buffer);
};

export default handler;
