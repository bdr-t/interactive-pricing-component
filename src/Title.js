import {
    Heading,
    VStack,
  } from "@chakra-ui/react";

import pattern from './assets/pattern-circles.svg'
const Title = () => {
    return ( 
        <VStack height='145px'backgroundImage={`url(${pattern})`} bgRepeat='no-repeat' bgPosition='center' justifyContent='center'>
            <Heading as="h1" size="xl">
              Simple, traffic-based pricing
            </Heading>
            <Heading as="h2" size="xs" color='text'>
              Sign-up for our 30-day trial. No credit card required.
            </Heading>

          </VStack>
     );
}
 
export default Title;
