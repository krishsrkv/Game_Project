import { defineConfig, defaultSystem } from "@chakra-ui/react";

const theme = defineConfig({
  ...defaultSystem,
  config: {
    colorMode: "dark",   // Automatically start in dark mode
  },
});

export default theme;
