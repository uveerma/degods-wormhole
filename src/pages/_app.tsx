import { title } from "@/lib/constants";
import "@/styles/globals.css";
import { theme } from "@/styles/theme";
import { WalletProvider } from "@/utils/providers/rainbowkit";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/courier-prime/400.css";
import "@fontsource/courier-prime/700.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <link rel="icon" href="/assets/icon.svg" type="image/svg" />
        <title>{title}</title>
      </Head>
      <Toaster />
      <ReactQueryDevtools />
      <ChakraProvider theme={theme}>
        <WalletProvider>
          <Component {...pageProps} />
        </WalletProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
