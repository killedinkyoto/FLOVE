import puppeteer from 'puppeteer';

const url = process.argv[2];

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:/Users/jomat_nweuhlk/.cache/puppeteer/chrome/win64-146.0.7680.153/chrome-win64/chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 500));

  const info = await page.evaluate(() => {
    const cards = document.querySelectorAll('.testimonial-card');
    const container = cards[0]?.parentElement;
    const cs = container ? getComputedStyle(container) : null;
    return {
      count: cards.length,
      containerClass: container?.className,
      display: cs?.display,
      gridTemplateColumns: cs?.gridTemplateColumns,
      gap: cs?.gap,
    };
  });
  console.log(info);

  await browser.close();
})();
