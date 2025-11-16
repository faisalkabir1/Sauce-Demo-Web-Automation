// @ts-check
import { test, expect } from '@playwright/test';

test('login, add one item, verify cart, and logout', async ({ page }) => {
  // 1) Login
  await page.goto('/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
}
);