import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // mobile screen
        lg: `"nav nav" "aside main"`, // large screen
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      gap={4}
    >
      <GridItem area="nav" bg="red.300">
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" bg="yellow.300">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="blue.300" height="100vh">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
