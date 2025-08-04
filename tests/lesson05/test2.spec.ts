// 2. Tạo file test2.spec.ts. Truy cập trang https://material.playwrightvn.com/, 
// click vào “Bài học 2: Product page”,
//  hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau: 
// a. Sản phẩm 1: 2 sản phẩm 
// b. Sản phẩm 2: 3 sản phẩm 
// c. Sản phẩm 3: 1 sản phẩm 

import test from "@playwright/test";


test("Test02", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.goto("https://material.playwrightvn.com/02-xpath-product-page.html");
    await page.locator('xpath=/html/body/div[2]/div[1]/div[1]/div/button').dblclick();
    await page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div/button').dblclick();
    await page.locator('xpath=/html/body/div[2]/div[1]/div[2]/div/button').click();
    await page.locator('xpath=/html/body/div[2]/div[1]/div[3]/div/button').click();
});


