import { Center, VStack } from "@chakra-ui/react";
import "./App.css";
import Card from "./Card";
import Title from "./Title";

import bgPattern from "./assets/bg-pattern.svg";

function App() {
  return (
    <Center
      w="100vw"
      h="100vh"
      backgroundColor="maingBackground"
      backgroundImage={`url(${bgPattern})`}
      bgRepeat="no-repeat"
      backgroundSize="100%"
    >
      <VStack spacing={14} color="textCTAbg">
        <Title />
        <Card />
      </VStack>
    </Center>
  );
}

export default App;
