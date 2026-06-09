import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: 'C:/Users/hasan/.cache/puppeteer/chrome/win64-127.0.6533.88/chrome-win64/chrome.exe',
  args: ['--no-sandbox'],
});

const page = await browser.newPage();
await page.goto('http://localhost:3000/guide-source.html', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2000)); // let fonts load

await page.pdf({
  path: path.join(__dirname, 'clean-label-saboteur-guide.pdf'),
  format: 'A4',
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
});

console.log('PDF saved: clean-label-saboteur-guide.pdf');
await browser.close();
