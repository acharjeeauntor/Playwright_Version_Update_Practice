const { test, expect } = require("@playwright/test");

test('Dialog Event', async ({ page },testInfo) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  // If there are multiple event then we need to use once insted of on in upper events
  page.once("dialog",async dialog=>{
    await dialog.accept()
  })
  await page.locator("#confirmbtn").click()
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  page.on("dialog",async dialog=>{
    await dialog.dismiss()
  })
  await page.locator("#confirmbtn").click()
});

test('Popup Event', async ({ page },testInfo) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    // If there are multiple event then we need to use once insted of on in upper events
    page.on("popup",async popup=>{
      await popup.title()
    })
   
    await page.locator("#confirmbtn").click()
    await page.close()
  });

  test('Download Event', async ({ page },testInfo) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    // If there are multiple event then we need to use once insted of on in upper events
    page.on("download",async download=>{
      await download.path()
      await download.cancel()
      await download.saveAs('/path/to/save/at/' + download.suggestedFilename())
    })
   
    await page.locator("#confirmbtn").click()
    await page.close()

// Second Way
    const downloadPromise = page.waitForEvent('download');
    await page.getByText('Download file').click();
    const download = await downloadPromise;
    
    // Wait for the download process to complete and save the downloaded file somewhere.
    await download.saveAs('/path/to/save/at/' + download.suggestedFilename());
  });

  test('Page Event', async ({ page,context }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const pagePromise = context.waitForEvent('page');
await page.locator('#opentab').click();
const newPage = await pagePromise;
await newPage.waitForLoadState();
console.log(await newPage.title());
  });
  test('Request Event', async ({ page,context }) => {
// second way
page.on('request',async req=>{
   console.log( await req.url())
   console.log( await req.method())
})
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
await page.close()
  });

  test('Response Event', async ({ page,context }) => {
    // second way
    page.on("response",async res=>{
       console.log( await res.status())
       console.log( await res.url())
    })
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.close()
      });
    