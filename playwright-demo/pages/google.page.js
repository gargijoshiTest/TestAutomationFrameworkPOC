const { expect } = require('@playwright/test');

class GooglePage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[name="q"]');
  }

  async goto() {
    await this.page.goto('https://www.google.com');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async expectPageOpened() {
    await expect(this.page).toHaveURL(/google\./i);
    await expect(this.searchInput).toBeVisible({ timeout: 10000 });
  }
}

module.exports = { GooglePage };
