 import{test,expect} from "@playwright/test"

 test('frames in playwright',async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")

    //total Framesss
    const allFrames=await page.frames();

    console.log(allFrames.length);

    //approach 1:using url

    const frame5=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_5.html'})

    // fill textbox inside frame
    await frame5.fill('input[name="mytext5"]', 'Neeraja');

    await page.waitForTimeout(1000)


    //approach:2 using frame locator

   const inputBox= await page.frameLocator("frame[src='frame_2.html']").locator("[name='mytext2']")

   inputBox.fill("Hello Bhukya")



 });