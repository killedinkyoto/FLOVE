import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, 'temporary screenshots');

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 3 });
await page.goto('http://localhost:3000/quiz/', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 800));

// 1. Intro
await page.screenshot({ path: path.join(dir, 'qz-1-intro.png') });
console.log('saved qz-1-intro.png');

// 2. Q1 — click Start
await page.click('.cta');
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: path.join(dir, 'qz-2-q1.png') });
console.log('saved qz-2-q1.png');

// 3. Q5 — multi select (navigate forward by picking options)
// Pick option for Q1
await page.click('.opt-btn');
await new Promise(r => setTimeout(r, 500));
// Q2
await page.click('.opt-btn');
await new Promise(r => setTimeout(r, 500));
// Q3
await page.click('.opt-btn');
await new Promise(r => setTimeout(r, 500));
// Q4
await page.click('.opt-btn');
await new Promise(r => setTimeout(r, 500));
// Q5 — multi select screen
await page.screenshot({ path: path.join(dir, 'qz-3-q5-multi.png') });
console.log('saved qz-3-q5-multi.png');

// 4. Advance through Q5 (select one + continue)
await page.click('.opt-btn');
await new Promise(r => setTimeout(r, 300));
await page.click('#multi-btn');
await new Promise(r => setTimeout(r, 500));
// Q6
await page.screenshot({ path: path.join(dir, 'qz-4-q6-block2.png') });
console.log('saved qz-4-q6-block2.png');

// 5. Navigate to interval page (pick Q6–Q9)
await page.click('.opt-btn');
await new Promise(r => setTimeout(r, 500));
// Q7 multi
await page.click('.opt-btn');
await new Promise(r => setTimeout(r, 300));
await page.click('#multi-btn');
await new Promise(r => setTimeout(r, 500));
// Q8
await page.click('.opt-btn');
await new Promise(r => setTimeout(r, 500));
// Q9 multi
await page.click('.opt-btn');
await new Promise(r => setTimeout(r, 300));
await page.click('#multi-btn');
await new Promise(r => setTimeout(r, 600));
// Interval page
await page.screenshot({ path: path.join(dir, 'qz-5-interval.png') });
console.log('saved qz-5-interval.png');

// 6. Email page — go through Q10-Q12
await page.click('.cta');
await new Promise(r => setTimeout(r, 500));
// Q10 multi
await page.click('.opt-btn');
await new Promise(r => setTimeout(r, 300));
await page.click('#multi-btn');
await new Promise(r => setTimeout(r, 500));
// Q11
await page.click('.opt-btn');
await new Promise(r => setTimeout(r, 500));
// Q12
await page.click('.opt-btn');
await new Promise(r => setTimeout(r, 600));
// Email page
await page.screenshot({ path: path.join(dir, 'qz-6-email.png') });
console.log('saved qz-6-email.png');

// 7. Results — submit email
await page.type('#email-field', 'tina@example.com');
await page.click('.cta');
await new Promise(r => setTimeout(r, 600));
await page.screenshot({ path: path.join(dir, 'qz-7-results.png') });
console.log('saved qz-7-results.png');

await browser.close();
