const { test } = require('@playwright/test');
const { GooglePage } = require('../pages/google.page');

test('google.com page is opened', async ({ page }) => {
  const googlePage = new GooglePage(page);

  await googlePage.goto();
  await googlePage.expectPageOpened();
});
