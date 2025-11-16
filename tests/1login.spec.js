const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('User can login with valid credentials', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
//assert with url
  await expect(page).toHaveURL(/inventory/);
  await page.waitForTimeout(2000);
});