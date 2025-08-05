import React from "react";
import {
  Button,
  Container,
  HStack,
  Flex,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SunIcon, AddIcon, MoonIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Container maxW={"1140px"} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{
            base: "column",
            sm: "row",
          }}
        >
          <Text
            bgGradient="linear(to-l, #34495e, #16a085)"
            bgClip={"text"}
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textAlign={"center"}
            textTransform={"uppercase"}
          >
            <Link to={"/"}>Product store 🛒</Link>
          </Text>

          <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
              <Button>
                <AddIcon fontSize={20} />
              </Button>
              <Button onClick={toggleColorMode}>
                {colorMode === "dark" ? (
                  <SunIcon fontSize={20} />
                ) : (
                  <MoonIcon fontSize={20} />
                )}
              </Button>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </>
  );
};

export default Navbar;
