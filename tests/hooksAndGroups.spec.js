  import{test,expect} from '@playwright/test'

  test.beforeEach(async({page})=>{
      
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
   await page.getByRole('button', { name: 'Login' }).click();
   
   
  })

  test('Operations',async({page})=>{
      

   await page.getByRole('link', { name: 'Leave' }).click();
  await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1).click();
  await page.getByText('23').click();
  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  await page.getByText('Cancelled').click();
  await page.getByRole('button', { name: 'Search' }).click();
 
  });


test('logout', async ({ page }) => {
  await page.getByText('manda user').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  
});

