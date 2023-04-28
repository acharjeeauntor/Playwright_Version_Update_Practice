const { test, expect } = require("@playwright/test");

test('has the ID', async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

