import { HStack, Switch, Tag, FormControl, FormLabel } from "@chakra-ui/react";

const Form = ({onChange}) => {
  return (
    <HStack width="100%" pr="16">
      <FormControl display="flex" alignItems="center" justifyContent="end">
        <FormLabel
          htmlFor="monthly"
          mb="1"
          fontSize="12px"
          fontWeight={600}
          color="text"
        >
          Monthly Billing
        </FormLabel>
          <Switch colorScheme="teal" />
        <FormLabel
          htmlFor="yearly"
          mb="1"
          ml={3}
          mr={0}
          py={9}
          fontSize="12px"
          fontWeight={600}
          color="text"
        >
          Yearly Billing
        </FormLabel>
      </FormControl>
      <Tag
        size="lg"
        width="100px"
        fontSize="10px"
        fontWeight={600}
        p="0"
        justifyContent="center"
        minHeight={5}
        bg="discountBg"
        color="discountText"
      >
        25% discount
      </Tag>
    </HStack>
  );
};

export default Form;
