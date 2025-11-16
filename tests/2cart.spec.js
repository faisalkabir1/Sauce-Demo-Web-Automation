const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');

test('User adds a product to cart and verifies name', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);
//login
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
await page.waitForTimeout(2000);
  //add to cart first product
  await products.addFirstProductToCart();
  const selectedProduct = products.productName;
await page.waitForTimeout(2000);
  //open cart and verify product name
  await products.openCart();
  const cartProduct = await cart.getCartProductName();
  await page.waitForTimeout(2000);
//assertion
  expect(cartProduct.trim()).toBe(selectedProduct.trim());
});
