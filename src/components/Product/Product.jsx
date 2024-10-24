import { useState } from 'react';
import { Box, Text, Flex, Button, Strong } from '@radix-ui/themes';
import Cart from '../../assets/icons/cart.svg';
import Gallery from '../Gallery/Gallery';
import Radio from '../Radio/Radio';

const Product = () => {
  const [selectedColor, setSelectedColor] = useState('Pink');

  const handleColorChange = color => {
    setSelectedColor(color);
  };

  return (
    <Box mx="4" my="4">
      <Flex
        gap="5"
        justify="start"
        direction={{
          initial: 'column',
          md: 'row',
        }}
      >
        <Box
          width={{
            initial: '100%',
            md: '50%',
          }}
        >
          <Gallery color={selectedColor} />
        </Box>

        <Box
          width={{
            initial: '100%',
            md: '50%',
          }}
          border="1px solid #e0e0e0"
        >
          <Text as="h2" size="6">
            <Strong>
              Jetix DF100 Pro Kids 4G {selectedColor} (100Pro-k2-RA)
            </Strong>
          </Text>

          <Box mt="4">
            <Text as="p" size="5" color="gray" mb="2">
              Color: <Strong color="black">{selectedColor}</Strong>
            </Text>
            <Flex gap="4" align="center">
              <Radio
                color="pink"
                isChecked={selectedColor === 'Pink'}
                onChange={() => handleColorChange('Pink')}
              />
              <Radio
                color="blue"
                isChecked={selectedColor === 'Blue'}
                onChange={() => handleColorChange('Blue')}
              />
            </Flex>
          </Box>
          <Flex align="center" gap="5" mt="3">
            <Text as="p" size="5" color="gray">
              Price: <Strong>1000₴</Strong>
            </Text>

            <Button color="teal" size="3">
              <img src={Cart} alt="cart" />
            </Button>
          </Flex>
          <Text as="p" size="3" mt="4" color="gray">
            Children's GPS watch JETIX DF100 Kids is a model that is a
            continuation of the top line, which has received many new useful
            features and interesting features. The smartwatch still supports 4G
            LTE video communication. The watch screen has a diagonal of 1.7
            inches with an IPS matrix—a bright and vivid image is guaranteed.
            The DF100 Pro Kids model has improved location detection, added
            A-GPS module, which allows you to determine your location almost
            instantly when you turn on the device. The degree of protection
            against dust and water in the watch is IP67. The model has an
            updated OS with additional features, such as: Audio and video
            players, voice recorder, stopwatch, face scan unlock, YouTube lite,
            TikTok lite, and more. The JETIX DF100 Pro model has a new
            reinforced battery, an improved camera, and even a vibration motor.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Product;
