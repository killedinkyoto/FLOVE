import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotsDir = path.join(__dirname, 'temporary screenshots');

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

function getNextScreenshotPath(label) {
  const files = fs.readdirSync(screenshotsDir).filter(f => f.endsWith('.png'));
  let maxN = 0;
  for (const file of files) {
    const match = file.match(/^screenshot-(\d+)/);
    if (match) maxN = Math.max(maxN, parseInt(match[1]));
  }
  const n = maxN + 1;
  const name = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
  return path.join(screenshotsDir, name);
}

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:/Users/hasan/.cache/puppeteer/chrome/win64-127.0.6533.88/chrome-win64/chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

  // Allow animations/transitions to settle
  await new Promise(r => setTimeout(r, 1000));

  const outputPath = getNextScreenshotPath(label);
  await page.screenshot({ path: outputPath, fullPage: true });

  console.log(`Screenshot saved: ${outputPath}`);
  await browser.close();
})();
