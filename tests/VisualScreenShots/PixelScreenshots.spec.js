import{test,expect} from '@playwright/test'

test('Screen shot1',async({page})=>{
  
    await page.goto("https://the-internet.herokuapp.com/tables");

    //await expect(page).toHaveScreenshot();

    //await expect(page).toHaveScreenshot(["ChildFolder1/ChildFolder2","MaxDiffPixels.png"])

    await expect(page).toHaveScreenshot("MaxDiffPixels.png",{maxDiffPixelRatio:800})

    
      
});