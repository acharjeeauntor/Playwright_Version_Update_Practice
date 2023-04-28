const {test,expect} = require("@playwright/test")

test("Before Main Store and Login the system first",async({page})=>{
  await page.goto("https://demo.guru99.com/v4/index.php")
await page.locator('input[name="uid"]').fill('mngr496327');
await page.locator('input[name="password"]').fill('pEdAqap');
await page.getByRole('button', { name: 'LOGIN' }).click();
await expect(page.getByRole('cell', { name: 'Manger Id : mngr496327', exact: true })).toBeVisible()
await page.context().storageState({
  path:"playwright/.auth/user.json"
})

})