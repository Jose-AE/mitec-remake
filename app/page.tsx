"use client";

import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import TodaysClasses from "./components/TodaysClasses";
function App() {
  return (
    <>
      <Grid
        h={{ base: "1000px", md: `calc(100vh - ${7}rem)` }}
        templateRows={{ base: "repeat(3, 2fr)", md: "repeat(4, 1fr)" }}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}
        gap={4}
      >
        <GridItem
          p="10px"
          borderRadius="lg"
          borderWidth="2px"
          gridArea={{ base: "1 / 1 / 2 / 2", md: "1 / 1 / 3 / 4" }}
        >
          <TodaysClasses />
        </GridItem>
        <GridItem
          gridArea={{ base: "2 / 1 / 3 / 2", md: "1 / 4 / 5 / 6" }}
          bg="#50A7FF"
        ></GridItem>

        <GridItem
          gridArea={{ base: "3 / 1 / 4 / 2", md: "3 / 1 / 5 / 4" }}
          bg="red.200"
        ></GridItem>
      </Grid>
    </>
  );
}

export default App;
