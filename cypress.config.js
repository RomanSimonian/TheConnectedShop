const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1sx4wk",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});


