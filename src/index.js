import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/manrope"


const theme = extendTheme({
  colors: {
    white: 'ffffff',
    fullSliderBar: 'hsl(174, 77%, 80%)',
    sliderBg: 'hsl(174, 86%, 45%)',
    discountBg: "hsl(14, 92%, 95%)",
    discountText: 'hsl(15, 100%, 70%)',
    CTAtext: 'hsl(226, 100%, 87%)',
    pricingComponentBg: 'hsl (0, 0%, 100%)',
    maingBackground:'hsl(230, 100%, 99%)',
    emptySliderBar: 'hsl(224, 65%, 95%)',
    toggleBg: 'hsl(223, 50%, 87%)',
    text: 'hsl(225, 20%, 60%)',
    textCTAbg: 'hsl(227, 35%, 25%)',
  },
  fonts: {
    heading: "Manrope",
    body: "Manrope",
  },
})


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}> 
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
