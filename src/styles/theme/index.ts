import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#FFF",
      accent: "#17153F",
      secondary: "#17153F",
      tertiary: "#FFF",
    },
  },
  fonts: {
    body: "Courier Prime, monospace",
  },
});

export { theme };
