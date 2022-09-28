import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "./styles/theme";
import { SideBarDrawerProvider } from "./context/SideBarContext";
import { makeServer } from "./services/mirage";

if(process.env.NODE_ENV === 'development'){
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      <SideBarDrawerProvider  >
        <Component {...pageProps} />
      </SideBarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp;
