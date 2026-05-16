import { test as setup } from '@playwright/test';
import fs from 'fs';

setup('login once', async ({ page }) => {

  // create auth folder
  fs.mkdirSync('playwright/.auth', { recursive: true });

  // open login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // enter username
  await page.fill('input[name="username"]', 'Admin');

  // enter password
  await page.fill('input[name="password"]', 'admin123');

  // click login
  await page.click('button[type="submit"]');

  // wait after login
  await page.waitForTimeout(5000);

  // save login session
  await page.context().storageState({
    path: 'playwright/.auth/user.json',
  });

});