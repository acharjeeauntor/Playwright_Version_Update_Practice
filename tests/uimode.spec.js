const { test, expect } = require("@playwright/test");

test('has the ID', async ({ page }) => {
  await page.goto('https://www.bestbuy.ca/en-ca/product/jbl-xtreme-2-rugged-waterproof-bluetooth-wireless-speaker-black/12568005');
  var title = await page.locator("section div h").textContent()
  var image_URL = await page.locator('[data-automation="image-slider-test"] img').nth(0).getAttribute("src")
  var desc = await page.locator(".description_1N8uX").textContent()
  console.log(title)
  console.log(image_URL)
  console.log(desc)
});

