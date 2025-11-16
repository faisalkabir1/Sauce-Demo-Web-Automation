class ProductsPage {
  constructor(page) {
    this.page = page;
    this.firstProductAddToCart = page.locator('(//button[contains(text(),"Add to cart")])[1]');
    this.firstProductName = page.locator('.inventory_item_name').first();
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addFirstProductToCart() {
    this.productName = await this.firstProductName.textContent();
    await this.firstProductAddToCart.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }
}

module.exports = { ProductsPage };
