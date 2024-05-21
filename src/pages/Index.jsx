import { Container, Box, VStack, HStack, Text, Image, Button, IconButton, Heading, StackDivider } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Stylish Jacket",
    price: "$99.99",
    image: "https://images.unsplash.com/photo-1547635289-f3a1a2078969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwamFja2V0fGVufDB8fHx8MTcxNjI2NTQ4Nnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1525171254930-643fc658b64e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjB0LXNoaXJ0fGVufDB8fHx8MTcxNjI2NTQ4Nnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Jeans",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqZWFuc3xlbnwwfHx8fDE3MTYyNjU0ODd8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} divider={<StackDivider borderColor="gray.200" />}>
        <Heading as="h1" size="2xl" mb={4}>
          Clothing Brand
        </Heading>
        <HStack spacing={4}>
          <IconButton aria-label="Cart" icon={<FaShoppingCart />} size="lg" />
          <IconButton aria-label="Wishlist" icon={<FaHeart />} size="lg" />
        </HStack>
        <VStack spacing={8} width="100%">
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%">
              <HStack spacing={4}>
                <Image src={product.image} alt={product.name} boxSize="150px" objectFit="cover" />
                <VStack align="start" spacing={2}>
                  <Text fontSize="xl" fontWeight="bold">
                    {product.name}
                  </Text>
                  <Text fontSize="lg" color="gray.500">
                    {product.price}
                  </Text>
                  <Button colorScheme="teal" size="sm">
                    Add to Cart
                  </Button>
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
