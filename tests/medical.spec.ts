import { test, expect } from '@playwright/test';

test('Medical question - Yes, Cancer, Self, existing since', async ({ page }) => {
  await page.goto('https://healthqa.policybazaar.com/proposalv2?EnhancedPlanType=custom-plan&encenq=a0FpVHhpdHNIa2MwdzNhNlBweEVmZ3hDWno0dndIVzhpNG12VTAxUzFrQT0&enquiryid=Njc0MDE5Ng%3D%3D&k=eyJhbGciOiJSUzI1NiIsImtpZCI6ImMxMjVjYzgzNmJiNCJ9.eyJFbnF1aXJ5SWQiOjY3NDAxOTYsIkV4cGlyeVRpbWUiOjE3OTMyNzA2MTgsIlJvbGUiOm51bGx9.I-kEJ1ywVv5HtzeqSPnkFV7FZJm-MSea7HkuTc5S9GQKRDXUZNTA9-2TqF_GErX2wQdlII8DQT_9K2N2kOElyp_TPrX3mhKOd78X8chQHNRWS1eXh46HE03WhGNP7-THMIcU3_tIiOUsWufgbJ1-3JYuZ4D8ljbTOSr3NuM8NgM&productv2=1');

  // Parent question: pre-existing diseases -> Yes
  await page.locator('#gate_yes_18062').click();

  // Condition checkbox
  await page.locator('[id="18063"]').click();

  // Member checkbox (Self)
  await page.locator('#1173413_18063').click();

  // Child question: Existing since (MM/YYYY)
  await page.locator('#existing_18064_1173413').fill('01/2020');
  await page.pause();

  //await expect(page.getByPlaceholder('Existing Since (MM/YYYY)')).toHaveValue(/01\/2020/);
});