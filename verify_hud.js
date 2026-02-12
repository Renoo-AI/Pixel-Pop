const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + process.cwd() + '/index.html');

  // Wait for game to init
  await page.waitForTimeout(500);

  // Start game
  await page.click('#start-btn');
  await page.waitForTimeout(500);

  await page.screenshot({ path: 'hud_v2.png' });

  // Check settings
  await page.evaluate(() => {
    // Manually set high score to unlock theme 1 for verification
    state.highScore = 6000;
    ProgressionSystem.checkUnlocks();
  });

  await page.click('#settings-btn');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'settings_v2.png' });

  await browser.close();
})();
