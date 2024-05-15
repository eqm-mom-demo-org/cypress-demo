const { defineConfig } = require("cypress");
const cucumberSetupNodeEvents = require('./cypress/plugins')

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
    specPattern: "cypress/e2e/**/*.{feature,js}",
    setupNodeEvents: cucumberSetupNodeEvents,
    //defaultCommandTimeout: 6000,
  },
  // viewportWidth: 1920,
  // viewportHeight: 1280,
});