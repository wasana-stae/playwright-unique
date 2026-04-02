import{ test, expect } from '@playwright/test';

// Test case for checking the title of the page
test('has title', async ({ page }) => {
  await page.goto('https://www.uniqlo.com/th/th/home');
  await expect(page).toHaveTitle(/UNIQLO/);
  setTimeout(() => {
    console.log('This will run after 10 seconds');
  }, 10000);
});
// Test case for checking the login functionality
test('login test', async ({ page }) => {
  await page.goto('https://www.uniqlo.com/th/th/home');
  await expect(page.locator('h1')).toHaveText('UNIQLO THAILAND');
  await page.getByRole('button', { name: 'ยอมรับคุกกี้ทั้งหมด' }).click();
  await page.getByRole('button').nth(5).click();
  await page.locator('[data-test=");
});