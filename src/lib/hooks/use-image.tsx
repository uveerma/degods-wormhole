import { useEffect, useState } from "react";

const useImage = (src: string) => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) {
      return;
    }

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImage(img);
      setLoading(false);
    };
    img.onerror = () => {
      setError(true);
      setLoading(false);
    };
  }, [src]);

  return { image, loading, error };
};

export { useImage };
