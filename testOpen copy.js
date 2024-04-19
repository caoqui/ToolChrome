const puppeteer = require('puppeteer');

const targetUrl = 'https://web.telegram.org/k/#@herewalletbot';
async function Run(profilePath) {
  try {
    // Khởi tạo trình duyệt Puppeteer
    const browser = await puppeteer.launch({ headless: false }); 
    // Mở một tab mới
    const page = await browser.newPage(); 

    // Mở extension trực tiếp
    await page.goto('chrome-extension://adlpodnneegcnbophopdmhedicjbcgco');

    // Đợi extension tải và sẵn sàng
    await page.waitForSelector('.connect-button');

    // Bấm vào nút kết nối để mở cửa sổ chọn server
    await page.click('.connect-button');

    // Đợi cửa sổ chọn server xuất hiện và chọn server mới
    await page.waitForSelector('.server-select__row');
    await page.click('.server-select__row');

    // Đợi một lúc để xem kết quả hoạt động của extension
    await page.waitForTimeout(5000);

    // Tương tác với trang web mục tiêu
    await page.goto(targetUrl);

    // Đợi một lúc để xem kết quả hoạt động của trang web
    await page.waitForTimeout(10000);

    // Đóng trình duyệt Puppeteer
    await browser.close();
  } catch (error) {
    console.log("[ERROR]", error);
  }
}

// Gọi hàm Run với đường dẫn profile
Run("D:\\Google\\Chrome\\User Data\\Profile6");
