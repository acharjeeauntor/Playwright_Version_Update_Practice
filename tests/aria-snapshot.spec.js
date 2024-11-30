const { test, expect } = require("@playwright/test");

test('Aria snapshots', async ({ page }) => {
    await page.goto('https://secure.timesheets.help/');
    await expect(page.locator('form[name="LoginForm"]')).toMatchAriaSnapshot(`
      - textbox "Email Address"
      - textbox "Password"
      - text:  
      - checkbox "Remember Me"
      - text: Remember Me
      - link "Forgot Password?"
      - button "Login"
      - button "Clock Out"
      - button "Clock In"
      - link " Contact"
      - link " Support"
      - text: Dark Mode
      - link "Want to test a sample account?"
    `);
  });


