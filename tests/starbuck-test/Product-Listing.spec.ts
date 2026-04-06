import { test, expect } from '@playwright/test';
//TS01 scenario for show the product listing page of starbucks website.
test('test', async ({ page }) => {
  await page.goto('https://starbucks.co.th/');
//click menu button
  await page.getByRole('link', { name: 'Menu' }).click();
//wait for manu laod
  await page.waitForLoadState('domcontentloaded');
// scroll down to product listing
  await page.evaluate(() => window.scrollBy(0, 1000));
//wait  for image load
  await page.waitForTimeout(12000);
//take screenshot of product listing page
  await page.screenshot({ path: 'test-results/product-listing.png', fullPage: true });
});