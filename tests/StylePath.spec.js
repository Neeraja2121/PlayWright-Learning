import { test, expect } from '@playwright/test';

test('Visual Comparison', async ({ page }) => {

    await page.goto('https://playwright.dev');

    await expect(page).toHaveScreenshot({
        fullPage: true,
        stylePath: 'style.css'
    });

});