import { test, expect } from '@playwright/test';

test('language selection and navigation', async ({ page }) => {
  await page.goto('http://localhost:3000/en');

  // Check initial language
  await expect(page.locator('text=Current language: en')).toBeVisible();

  // Select Polish language
  await page.click('text=Polish');
  await expect(page).toHaveURL('http://localhost:3000/pl');
  await expect(page.locator('text=Current language: pl')).toBeVisible();

  // Select Spanish language
  await page.click('text=Spanish');
  await expect(page).toHaveURL('http://localhost:3000/es');
  await expect(page.locator('text=Current language: es')).toBeVisible();

  // Navigate to sub page
  await page.click('text=English Sub Page');
  await expect(page).toHaveURL('http://localhost:3000/en/test');
  await expect(page.locator('text=Current language: en')).toBeVisible();
});
