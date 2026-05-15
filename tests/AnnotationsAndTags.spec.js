 import{test,expect} from '@playwright/test'

 test.skip('skip one',async({page})=>{

 });

 test('failed annotations',async({page})=>{
    test.fail()
 });

 test.fixme('test to be Fixed fixme',async({page})=>{
  
 });

 test.slow('slowing the test',async({page})=>{

 });
 //groups

 test('headline @smoke',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 })

 test('headline @sanity',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 })