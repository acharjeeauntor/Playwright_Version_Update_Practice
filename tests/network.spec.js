const { test, expect } = require("@playwright/test");

test('Network Response Inteception and post the fake response by body', async ({ page }) => {
       //intercepting response -APi response-> { playwright fakeresponse}->browser->render data on front end
    const fakePayLoadOrders = { data: [], message: "No Orders" };
  
  await page.goto('https://rahulshettyacademy.com/client/');
  await page.locator('#userEmail').fill("example1@gmail.com")
  await page.locator("#userPassword").fill("Aa@18")
  await page.locator("#login").click()

  var URL = "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*"

await page.route(URL,async route=>{
    var response = await route.fetch()
    const body = JSON.stringify(fakePayLoadOrders)
    await route.fulfill(
        {
            response,
            body
        }
    )
})
await page.locator("button[routerlink*='myorders']").click();
await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
console.log(await page.locator(".mt-4").textContent());

await page.close()

});

test('Network Response Inteception and post the fake response by json', async ({ page }) => {
    //intercepting response -APi response-> { playwright fakeresponse}->browser->render data on front end
await page.goto('https://rahulshettyacademy.com/client/');
await page.locator('#userEmail').fill("example1@gmail.com")
await page.locator("#userPassword").fill("Aa@18")
await page.locator("#login").click()

var URL = "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*"

await page.route(URL,async route=>{
 var response = await route.fetch()
 const json = await response.json()
 json.data=[]
 await route.fulfill(
     {
         response,
         json
     }
 )
})
await page.locator("button[routerlink*='myorders']").click();
await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
console.log(await page.locator(".mt-4").textContent());

await page.close()

});

test('Continues routes request with optional overrides, Just request argument ta change kore request pathano', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/client/');
await page.locator('#userEmail').fill("example1@gmail.com")
await page.locator("#userPassword").fill("Aa@18")
await page.locator("#login").click()
await page.locator("button[routerlink*='myorders']").click();

const reqURL="https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*"
const changedURL="https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6"
await page.route(reqURL,async (route,request)=>{
    await route.continue({url:changedURL})
})
await page.locator("button:has-text('View')").first().click();
await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");
await page.close()

});

test('Aborts the routes request.', async ({ page }) => {
    // await page.route("**/*.css",async route=>{
    //     await route.abort()
    // })
        await page.route("**/*.{png,jpg,jpeg}",async route=>{
        await route.abort()
    })
    await page.goto('https://daffodilvarsity.edu.bd/');
    await page.close()
    });