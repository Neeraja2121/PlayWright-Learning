 import{test,expect} from '@playwright/test'
 
 test('Screen shot1',async({page})=>{
   
     await page.goto("https://the-internet.herokuapp.com/tables");
 
     //await expect(page).toHaveScreenshot();
 
   
 
     await expect(page).toHaveScreenshot("mask page1.png",{mask:[page.locator("//table[@id='table1']//tbody//tr//td[4]")]});
 
     
       
 });