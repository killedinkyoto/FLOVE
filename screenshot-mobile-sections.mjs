import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, 'temporary screenshots');

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: 'C:/Users/hasan/.cache/puppeteer/chrome/win64-127.0.6533.88/chrome-win64/chrome.exe',
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 3 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 1500));

const slices = [0, 844, 1688, 2532, 3376];
for (let i = 0; i < slices.length; i++) {
  await page.evaluate(y => window.scrollTo(0, y), slices[i]);
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(dir, `ms-${i+1}.png`), fullPage: false });
  console.log(`saved ms-${i+1}.png at scrollY=${slices[i]}`);
}
await browser.close();
