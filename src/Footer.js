import {
  HStack,
  VStack,
  List,
  ListItem,
  Box,
  Spacer,
  ListIcon,
  Text,
} from "@chakra-ui/react";
import IconCheck from "./IconCheck";
const Footer = () => {
  return (
    <HStack
      borderTop="1px"
      borderColor="emptySliderBar"
      width="100%"
      pt={7}
      px={10}
    >
      <VStack>
        <List spacing={2} fontSize="12px">
          <ListItem alignItems="center" display="flex">
            <ListIcon as={IconCheck} />
            <Text ml={4}>Unlimted websites</Text>
          </ListItem>
          <ListItem alignItems="center" display="flex">
            <ListIcon as={IconCheck} />
            <Text ml={4}>100% data ownership</Text>
          </ListItem>
          <ListItem alignItems="center" display="flex">
            <ListIcon as={IconCheck} />
            <Text ml={4}>Email repots</Text>
          </ListItem>
          {/* You can also use custom icons from react-icons */}
        </List>
      </VStack>
      <Spacer />
      <Box
        as="button"
        height={10}
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        width="170px"
        borderRadius="50px"
        fontSize="13px"
        fontWeight="semibold"
        bg="textCTAbg"
        borderColor="#ccd0d5"
        color="CTAtext"
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
      >
        Start my trial
      </Box>
    </HStack>
  );
};

export default Footer;
