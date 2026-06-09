import puppeteer from 'puppeteer';
import fs from 'fs';
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
await new Promise(r => setTimeout(r, 800));

const targets = [9000, 10000];
let slice = 32;

for (const y of targets) {
  await page.evaluate(y => window.scrollTo(0, y), y);
  await new Promise(r => setTimeout(r, 300));
  const out = path.join(dir, `v2-${String(slice).padStart(2,'0')}.png`);
  await page.screenshot({ path: out, fullPage: false });
  console.log(`saved ${out} (scrollY=${y})`);
  slice++;
}

await browser.close();
