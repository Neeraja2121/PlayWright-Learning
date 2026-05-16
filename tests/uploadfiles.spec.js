 import{test,expect} from "@playwright/test"

 test('upload Files',async({page})=>{

    await page.goto('https://www.naukri.com/registration/createAccount?othersrcp=22636')

    await page.getByText("I'm experienced").click();
  
    

    await page.locator('input[type="file"]').setInputFiles('tests/uploadFiles/PlayWrightInterviewQuestions.pdf')

    await page.waitForTimeout(1000)

 });

 test('Multiple Files upload',async({page})=>{

     await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

     await page.locator('input[type="file"]')
     .setInputFiles(['tests/uploadFiles/PlayWrightInterviewQuestions.pdf','tests/uploadFiles/Selenium Interview Questions.pdf'])
 })
