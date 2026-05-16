import{test,expect} from "@playwright/test"



test('Inner Frames', async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    // Get all frames
    const frames = page.frames();

    // Find frame_3
    const frame3 = frames.find(frame =>
        frame.url().includes("frame_3.html")
    );

    // Get child frame
    const childFrame = frame3.childFrames()[0];

    // Check checkbox
    await childFrame.locator('input[type="checkbox"]').check();

    await page.waitForTimeout(1000);

});




test('Inner Frames2', async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame3 = page.frameLocator('iframe[src="frame_3.html"]');

    const child = frame3.frameLocator('iframe');

    await child.locator('input[type="checkbox"]').first().check();

});
