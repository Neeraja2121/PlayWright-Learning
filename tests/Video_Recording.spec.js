  import {test,expect, chromium} from '@playwright/test'


  test('Video Recording ' , async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.pause()

    await page.getByPlaceholder('Username').fill("Admin")

    await page.getByPlaceholder('Password').fill("admin123")

    await page.getByRole('button' , {type:'submit'}).click();
    
  });

  test('Video Recording Demo 2', async()=>{
    
    const browser=await chromium.launch({
        slowMo:500,
        headless:false
    });

    const context=await browser.newContext({
        recordVideo:{
            dir:'videos/',
            size:{width:800, height:600}
        }
    });

    const page=await context.newPage();

    await page.goto("")
  });
