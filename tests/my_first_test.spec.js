  const{test,expect}= require('@playwright/test')

  test('My ffisrt test' , async({page})=>{
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
  })