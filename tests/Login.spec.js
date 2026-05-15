 import{test,expect} from "@playwright/test"
import path from "node:path"

 test('Storage State',async({page})=>{

    //Login to page

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder('Username').fill("Admin")

    await page.getByPlaceholder('Password').fill("admin123")

    await page.getByRole('button', { name: 'Login' }).click();

    // Wait until dashboard opens
    await page.waitForURL(/dashboard/);

    //save storage state

    await page.context().storageState({path:'playwright/.auth/user.json'})



 });