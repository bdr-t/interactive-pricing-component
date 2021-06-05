import { VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import Slider from "./Slider";
const Card = () => {
  const [views, setViews] = useState("100K");
  const [dollars, setDollars] = useState("16.00");
  const [discount, setDiscount] = useState(false);

  const onChangeEnd = (val) => {
    setViews(`${val}K`);
    let price = val * 0.15
    let priceDiscounted = val * 0.15 * 0.75

    if (Number.isInteger(price)) {
      setDollars(`${discount ? priceDiscounted : price}.00`);
    } else {
      setDollars(`${discount ? priceDiscounted : price}0`);
    }

  };


  return (
    <VStack
      w={{ base: "330px", md: "330px", lg: "540px" }}
      h={{ base: "480px", md: "480px", lg: "400px" }}
      style={{ backgroundColor: "white" }}
      borderRadius="md"
      boxShadow="sm"
    >
      <Header views={views} dollars={dollars} />
      <Slider onChangeEnd={onChangeEnd} />
      <Form />
      <Footer />
    </VStack>
  );
};

export default Card;
