 import{test,expect,chromium} from '@playwright/test'

 test('Video Recording using Browser',async()=> {
    const browser=await chromium.launch({
            slowMo:500,
            headless:true
        });
    
        const context=await browser.newContext({
            recordVideo:{
                dir:'videos/',
                size:{width:800, height:600}
            }
        });
    
        const page=await context.newPage();
    
         await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.pause()

    await page.getByPlaceholder('Username').fill("Admin")

    await page.getByPlaceholder('Password').fill("admin123")

    await page.getByRole('button' , {type:'submit'}).click();

    await context.close();

 });
