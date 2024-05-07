const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
   defaultCommandTimeout:6000
  },
  // viewportWidth: 1920,
  // viewportHeight: 1280,
});

