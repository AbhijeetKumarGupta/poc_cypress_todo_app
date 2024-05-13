import { defineConfig } from "cypress";
const cypressSplit = require('cypress-split')

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      return config
    },
  },
});
