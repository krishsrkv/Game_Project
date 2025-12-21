import { Box, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import type { Genre } from "./hooks/useGenres";

function App() {
  const { colorMode } = useColorMode();
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        <GridItem area="nav" p={4}>
          <Navbar />
        </GridItem>

        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectGenre={setSelectedGenre} />
        </GridItem>

        <GridItem area="main" p={4}>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
