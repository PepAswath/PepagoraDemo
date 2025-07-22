import { test, expect } from '@playwright/test';

import { defineConfig } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://staging.pepagora.com/', { waitUntil: 'load' });

  await page.getByRole('button', { name: '×' }).click();

  await page.getByRole('banner').getByRole('link', { name: 'Post Buying Request' }).click();

  await page.screenshot({ path: 'buying-request-filled.png' });

  await page.locator('#product_name').click();

  await page.locator('#product_name').fill('Tyre');

  await page.getByRole('link', { name: 'Select Category' }).click();

  await page.getByRole('textbox', { name: 'Search Categories' }).click();

  await page.getByRole('textbox', { name: 'Search Categories' }).fill('Tyre');

  await page.getByRole('button', { name: 'Search' }).click();

  await page.getByText('Rubber & Plastics >> Rubber').click();

  await page.getByRole('button', { name: 'OK' }).click();

  await page.getByRole('textbox', { name: 'Quantity' }).click();

  await page.getByRole('textbox', { name: 'Quantity' }).fill('100');

  await page.getByRole('combobox').selectOption('Pieces');

  await page.getByRole('textbox', { name: 'Date' }).click();

  await page.getByRole('link', { name: '28', exact: true }).click();

  await page.locator('input[name="prd_first_name"]').click();

  await page.locator('input[name="prd_first_name"]').fill('Aswath');

  await page.locator('input[name="prd_email_id"]').click();

  await page.locator('input[name="prd_email_id"]').fill('pepagoraalphaqa@gmail.com');

  await page.getByRole('link', { name: 'Submit' }).click();

  await page.screenshot({ path: 'form-submitted.png' });

});