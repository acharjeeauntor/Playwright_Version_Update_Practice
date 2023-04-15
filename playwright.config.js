const {devices} = require("@playwright/test")
const path = require("path")

const STORAGE_STATE = path.join(__dirname,'playwright/.auth/user.json')

const config = {
// use:{
// baseURL:""
// },
  expect: {

    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 20000
  },

  //sets timeout for each test case
  timeout: 120000,

  //number of retries if test case fails
  retries: 0,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  // reporter: [[`./CustomReporterConfig.ts`], ['list'], [`allure-playwright`], [`html`, { outputFolder: 'html-report', open: 'never' }]],
  reporter: [['list'],[`html`, { outputFolder: 'html-report', open: 'never' }]],

  /* Configure projects for major browsers */
  projects: [
    {
      name:`setup`,
      testMatch: "**/*.setup.js",
      use:{
        headless: false,
        browser:"chromium"
      }
    },
    {
      name: 'e2e',
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Chrome'],
        headless:false,
        storageState:STORAGE_STATE
      }

    },
  ],
};
module.exports = config;