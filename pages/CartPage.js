class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItemName = page.locator('.inventory_item_name');
  }

  async getCartProductName() {
    return await this.cartItemName.textContent();
  }
}

module.exports = { CartPage };
