const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false }); // Khởi tạo trình duyệt Puppeteer
    const page = await browser.newPage(); // Mở một tab mới

    await page.goto('chrome-extension://adlpodnneegcnbophopdmhedicjbcgco'); // Thay thế <extension_id> bằng ID của extension VPN của bạn

    // Đợi extension VPN tải và sẵn sàng
    await page.waitForSelector('.connect-button');

    // Bấm vào nút kết nối để mở cửa sổ chọn server
    await page.click('.connect-button');

    // Đợi cửa sổ chọn server xuất hiện và chọn server mới
    await page.waitForSelector('.server-select__row');
    await page.click('.server-select__row');

    // Đóng trình duyệt Puppeteer
    // await browser.close();
})();
