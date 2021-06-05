import {
  Box,
  Slider as SliderC,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,

} from "@chakra-ui/react";

import IconSlider from './IconSlider'

const Slider = ({onChangeEnd}) => {
  return (
    <SliderC width="440px"  defaultValue={100} min={0} max={200} step={10} onChangeEnd={onChangeEnd}>
      <SliderTrack bg="emptySliderBar" height='8px' borderRadius='50px'>
        <Box position="relative" />
        <SliderFilledTrack bg="fullSliderBar" />
      </SliderTrack>
      <SliderThumb boxSize={8} backgroundColor='sliderBg'>
        <Box as={IconSlider} />
      </SliderThumb>
    </SliderC>
  );
};

export default Slider;
