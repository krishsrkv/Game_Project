import { Grid, GridItem, Show, Box } from "@chakra-ui/react";
import Navbar from "./components/navbar";

function App() {
  return (
    <Box bg="bg.canvas" minH="100vh">
      {" "}
      {/* Full-page dark background */}
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        p="4"
      >
        <GridItem area="nav" bg="red.300">
          <Navbar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" bg="yellow.300">
            Aside
          </GridItem>
        </Show>

        <GridItem area="main" bg="blue.300">
          Main
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
