import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider,QueryClient } from "react-query";
import { theme } from "./styles/theme";
import { SideBarDrawerProvider } from "./context/SideBarContext";
import { makeServer } from "./services/mirage";
import {ReactQueryDevtools} from 'react-query/devtools'
import { queryClient } from "./services/mirage/queryClient";

if (process.env.NODE_ENV === "development") {
  makeServer();
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS={false} theme={theme}>
        <SideBarDrawerProvider>
          <Component {...pageProps} />
        </SideBarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default MyApp;
