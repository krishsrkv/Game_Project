import { Box, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const { colorMode } = useColorMode();

  return (
    <Box
      minH="100vh"
      bg={colorMode === "dark" ? "gray.800" : "gray.100"}
      color={colorMode === "dark" ? "white" : "black"}
    >
      <Grid
        templateAreas={{
          base: `"nav"
                 "main"`,
          lg: `"nav nav"
               "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem
          area="nav"
          bg={colorMode === "dark" ? "gray.700" : "white"}
          p={4}
          borderRadius="md"
        >
          <Navbar />
        </GridItem>

        <GridItem
          area="aside"
          paddingX={5}
          bg={colorMode === "dark" ? "gray.700" : "white"}
          p={4}
          borderRadius="md"
        >
          <GenreList />
        </GridItem>

        <GridItem
          area="main"
          bg={colorMode === "dark" ? "gray.700" : "white"}
          p={4}
          borderRadius="md"
        >
          <GameGrid />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
