import { test, expect } from '@playwright/test'

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Nazirman — Application Developer & AI Engineer')
  await expect(page.getByRole('heading', { name: 'Building Intelligent Systems.' })).toBeVisible()
})

test('selected work lists 3 real projects without placeholders', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: 'FreshPlate Mobile App' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'FreshPlate Web & Landing Page' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'URBuddy LLM' })).toBeVisible()
  await expect(page.getByRole('heading', { name: /SHIELD AI|Corrosion/ })).toHaveCount(0)
})
