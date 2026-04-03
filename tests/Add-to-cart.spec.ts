import { test,expect } from '@playwright/test';

test('add to cart', async ({ page }) => {
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
    //given click product  
  await page.getByRole('button', { name: 'เสื้อยืด เสื้อผ้าสเวต และบราท็อป' }).click();
  await page.getByRole('link', { name: 'เสื้อยืด และ เสื้อแขนกุด' }).click();
    // //when click add to cart button
  await page.getByRole('button', { name: 'เพิ่มลงในรถเข็น' }).click();
  await page.goto('https://www.uniqlo.com/th/th/women/tops/t-shirts?path=%2C%2C8404');
  await page.locator('[data-test="product-card-E465760-000"]').getByRole('link', { name: 'เสื้อยืด ทรงมินิ Colour' }).click();
  await page.goto('https://www.uniqlo.com/th/th/products/E465760-000?colorCode=COL37&sizeCode=SMA003');
  await page.getByRole('img', { name: 'image-0' }).click();
  await page.goto('https://www.uniqlo.com/th/th/women/tops/t-shirts?path=%2C%2C8404');
  await page.locator('[data-test="product-card-E485637-000"]').getByRole('link', { name: 'เสื้อกล้าม ผ้าลายนูน (Ribbed' }).click();
  await page.locator('[data-test="L"] label').filter({ hasText: 'L' }).click();
  await page.locator('[data-test="เพิ่มลงในตะกร้า-button"]').click();
  await page.locator('[data-test="ดูตะกร้า-button"]').click();

    // //then click view cart button
    // await page.getByRole('button', { name: 'ดูรถเข็น' }).click();
    // //timeout
    // await page.waitForTimeout(5000);
});