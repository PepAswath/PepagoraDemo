
import { defineConfig } from '@playwright/test';

await page.goto('https://staging.pepagora.com/');

  await page.getByRole('button', { name: '×' }).click();

  await page.getByRole('banner').getByRole('link', { name: 'Post Buying Request' }).click();

  await page.locator('#product_name').click();

  await page.locator('#product_name').fill('Tyre');

  await page.getByRole('link', { name: 'Select Category' }).click();

export default defineConfig({
  use: {
    screenshot: 'on', // or 'only-on-failure'
    video: 'on', // or 'retain-on-failure'
  }
});