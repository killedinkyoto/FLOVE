import puppeteer from 'puppeteer';

const url = process.argv[2];
const outDir = 'c:/Users/jomat_nweuhlk/Desktop/FloveCode/temporary screenshots';

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:/Users/jomat_nweuhlk/.cache/puppeteer/chrome/win64-146.0.7680.153/chrome-win64/chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  // force-load all lazy images and wait for full layout
  await page.evaluate(() => {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => img.loading = 'eager');
  });
  await new Promise(r => setTimeout(r, 1500));

  const cards = await page.$$('.testimonial-card');
  console.log('card count', cards.length);
  if (cards.length) {
    await cards[0].scrollIntoView({block: 'center'});
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: `${outDir}/pre-cta-testimonials.png` });
  }

  const anaHandle = await page.evaluateHandle(() => {
    const els = [...document.querySelectorAll('section')];
    return els.find(s => s.textContent.includes('Ana H.'));
  });
  const anaEl = anaHandle.asElement();
  if (anaEl) {
    await anaEl.scrollIntoView({block: 'start'});
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: `${outDir}/post-cta-testimonial.png` });
  } else {
    console.log('Ana section not found');
  }

  await browser.close();
})();
