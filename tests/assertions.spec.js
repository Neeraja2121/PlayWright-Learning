 import{test,expect} from '@playwright/test'

 test(' All Types Of assertions',async({page})=>{

   await page.goto("https://kitchen.applitools.com/")

   await page.pause()

   await expect(page.locator('text=The Kitchen')).toHaveCount(1)

   if(await page.$('text=The Kitchen'))
   {
    await page.locator('text=The Kitchen').click();
   }
   
   await expect (page.locator('text=The Kitchen')).toBeVisible()
   

   await expect (page.locator('text=The Kitchen')).toHaveText('The Kitchen')
   await expect.soft(page.locator('text=The Kitchen')).not.toHaveText('ABCD')

   await expect (page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)
   await expect(locator).toHaveClass(/selected row/);

   await expect(page).toHaveURL(/kitchen.applitools.com/);

   await expect(page).toHaveTitle(/.*Kitchen/);

   await expect(page).toHaveScreenshot();

 });