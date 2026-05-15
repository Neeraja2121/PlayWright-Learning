import{test,expect} from '@playwright/test'

test('selectors and locators', async({page})=>{

    await page.goto("https://sauce-demo.myshopify.com/account/login")

    await page.locator('[id="customer_email"]').click()

    await page.locator('[id="customer_email"]').fill("Bhukya")

    await page.pause()

    await page.locator('//input[@type="password"]').fill("neer")

});




 