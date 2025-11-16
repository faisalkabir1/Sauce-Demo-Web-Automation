const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { MenuPage } = require('../pages/MenuPage');

test('User logs out successfully', async ({ page }) => {
  const login = new LoginPage(page);
  const menu = new MenuPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
await page.waitForTimeout(2000);
  await menu.logout();
  await expect(page).toHaveURL('/');
  
  await page.waitForTimeout(2000);
});
