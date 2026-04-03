import { test, expect } from '@playwright/test';

test('add to cart complete flow', async ({ page }) => {
  console.log('========== START: เข้าสู่ระบบเรียบร้อยแล้ว ==========');
  
  // Step 1: Login
  await page.goto('https://www.uniqlo.com/th/th/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  
  // Accept cookies
  try {
    await page.getByRole('button', { name: 'ยอมรับคุกกี้ทั้งหมด' }).click({ timeout: 5000 });
  } catch (e) {
    console.log('Cookies dialog not found, continuing...');
  }
  
  // Click account button
  await page.getByRole('button').nth(4).click({ timeout: 10000 });
  
  // Click dialog OK
  try {
    await page.locator('[data-test="ตกลง-button"]').click({ timeout: 5000 });
  } catch (e) {
    console.log('Dialog not found, continuing...');
  }
  
  await page.waitForLoadState('domcontentloaded');
  
  // Fill email
  await page.getByRole('textbox', { name: 'อีเมล' }).fill('Mlearning1994@gmail.com', { timeout: 10000 });
  
  // Fill password
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('Milk2485', { timeout: 10000 });
  
  // Click login
  await page.locator('[data-test="login-button"]').click({ timeout: 10000 });
  
  // Wait for login to complete - use domcontentloaded instead of load
  await page.waitForLoadState('domcontentloaded', { timeout: 30000 });
  
  // Give page extra time to settle after login
  await page.waitForTimeout(3000);
  
  console.log('✅ เข้าสู่ระบบสำเร็จ');
  
  console.log('\n========== STEP 2: ไปเลือกสินค้า ==========');
  
  // Navigate to products page
  await page.goto('https://www.uniqlo.com/th/th/women/tops/t-shirts', { waitUntil: 'domcontentloaded', timeout: 60000 });
  
  // Wait for products to load
  await page.waitForSelector('[data-test*="product-card"]', { timeout: 15000 });
  console.log('✅ ไปหน้าเลือกสินค้าสำเร็จ');
  
  console.log('\n========== STEP 3: เพิ่มลงตะกร้า ==========');
  
  // Select product
  await page.locator('[data-test="product-card-E485637-000"]').getByRole('link', { name: 'เสื้อกล้าม ผ้าลายนูน (Ribbed' }).click({ timeout: 10000 });
  await page.waitForLoadState('domcontentloaded');
  
  // Select size
  await page.locator('[data-test="L"] label').filter({ hasText: 'L' }).click({ timeout: 10000 });
  
  // Add to cart
  await page.locator('[data-test="เพิ่มลงในตะกร้า-button"]').click({ timeout: 10000 });
  await page.waitForTimeout(2000);
  console.log('✅ เพิ่มสินค้าลงตะกร้าสำเร็จ');
  
  console.log('\n========== STEP 4: ดูรีวิวสินค้าในตะกร้า ==========');
  
  // View cart
  await page.locator('[data-test="ดูตะกร้า-button"]').click({ timeout: 10000 });
  await page.waitForLoadState('domcontentloaded');
  
  // Verify cart page
  await expect(page).toHaveURL(/cart|checkout/, { timeout: 10000 });
  
  console.log('✅ ดูรีวิวสินค้าในตะกร้าสำเร็จ');
  
  console.log('\n========== STEP 5: แสดงหน้าตะกร้าสินค้า ==========');
  
  // Get cart page URL
  const cartUrl = page.url();
  console.log(`📦 หน้าตะกร้า URL: ${cartUrl}`);
  
  // Get cart title
  const pageTitle = await page.title();
  console.log(`📄 หน้าชื่อ: ${pageTitle}`);
  
  // Get product info from cart
  const productName = await page.locator('[data-test*="product"], [class*="product"]').first().textContent().catch(() => 'N/A');
  console.log(`🛍️ สินค้าในตะกร้า: ${productName}`);
  
  // Take screenshot of cart page
  await page.screenshot({ path: 'test-results/cart-page.png', fullPage: true });
  console.log('📸 Screenshot หน้าตะกร้า: test-results/cart-page.png');
  
  console.log('\n========== ✅ TEST PASSED ✅ ==========');
});
