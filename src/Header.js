import { HStack, Text, Spacer } from "@chakra-ui/react";

const Header = ({views, dollars}) => {
  return (
    <HStack width="100%" pt={10} px={10} pb={5}>
      <Text color="text" fontWeight="extrabold" letterSpacing={3}>
        {" "}
        {views} PAGEVIEWS{" "}
      </Text>
      <Spacer />
      <HStack>
        {" "}
        <Text fontSize='4xl'fontWeight='extrabold' color='textCTAbg' >&#36; {dollars} </Text>
        <Text color='text' fontWeight="extrabold">/ month</Text>{" "}
      </HStack>
    </HStack>
  );
};

export default Header;
