import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.uniqlo.com/th/th/');
  await page.getByText('UNIQLO ใช้เครื่องมือติดตาม (เช่น คุกกี้หรือ SDK').click();
  await page.getByRole('button', { name: 'ยอมรับคุกกี้ทั้งหมด' }).click();
  //given go to uniqlo website
  await page.getByRole('button').nth(4).click();
  //when click login button
  await page.locator('[data-test="ตกลง-button"]').click();
  //then fill email and password
  await page.getByRole('textbox', { name: 'อีเมล' }).click();
  await page.getByRole('textbox', { name: 'อีเมล' }).fill('Mlearning1994@gmail.com');
  await page.getByRole('textbox', { name: 'อีเมล' }).press('Tab');
  await page.getByRole('textbox', { name: 'รหัสผ่าน  รหัสผ่านต้องมีตัวอักษรระหว่าง 8-20' }).fill('Milk2485');
  await page.locator('[data-test="login-button"]').click();
  //timeout
  await page.waitForTimeout(10000);
});