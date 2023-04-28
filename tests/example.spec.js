const { test, expect } = require("@playwright/test");

test('has the ID', async ({ page },testInfo) => {
  await page.goto('https://demo.guru99.com/v4/index.php');
  await expect(page.getByRole('cell', { name: 'Manger Id : mngr496327', exact: true })).toBeVisible()
});

