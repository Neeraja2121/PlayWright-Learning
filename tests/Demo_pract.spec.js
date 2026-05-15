 import{test,expect} from '@playwright/test'

 test('Demo first site',async({page})=>{
   
    await page.goto('https://demo.applitools.com/')

    //await page.pause()

    await page.locator('#username').click()

    await page.locator('[id="username"]').fill("bhukya")

    await page.locator('//input[@id="password"]').fill("neer@123")

    await page.locator('//input[@type="submit"]').click()


 });