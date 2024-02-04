const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 120000,
  
  e2e: {
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
    "chromeWebSecurity": false,
    baseUrl: 'https://bestinsurance.trumobile.dev/login',
    supportFile: false,
  },
});
