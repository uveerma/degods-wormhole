import { saveAs } from "file-saver";

const downloadZip = async (imgs: string[]) => {
  if (imgs) {
    imgs.forEach(async (img) => {
      const image_url = `/api/generate-png?image=${img}`;
      const res = await fetch(image_url);

      const blob = await res.blob();

      saveAs(blob, "wormholed.png");
    });
  }
};

export { downloadZip };
