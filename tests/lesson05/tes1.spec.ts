// 1. Tạo file test1.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 1: Register Page” 
// a. Nhập đầy đủ các thông tin, click button register 

import { test } from "@playwright/test"

test("Test 01", async ({page}) => {
        await page.goto("https://material.playwrightvn.com/")
});

test("Test 02", async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
        await page.locator("//input[@id='username']").fill("testuser");
        await page.locator("//input[@id='email']").fill("luubinh@gmail.com");
        await page.locator("//input[@value='female']").check();
        await page.locator("//input[@id='traveling']").check();
        await page.locator("//select[@id='interests']").selectOption({ index: 2 });
        await page.locator("//*[@id='country']").selectOption({ index: 1 });
        await page.locator("//*[@id='dob']").fill("1999-10-26");
        await page.locator("//input[@id='profile']").setInputFiles("./tests/lesson05/images.jpeg");
        await page.locator("//*[@id='bio']").pressSequentially("This is the bio");
        await page.locator("//*[@id='rating']").fill("7");
        await page.locator("//*[@id='favcolor']").fill("#8bd545");
        await page.locator("//input[@id='newsletter']").check();
        await page.locator("label[for='toggleOption']").click();

        const starDiv = page.locator("//div[@id='starRating']");
        const box = await starDiv.boundingBox();
        if (box) {
        await page.mouse.click(box.x + box.width * 0.3, box.y + box.height / 2);
        };
        await page.evaluate(() =>{
                const input = document.getElementById('customDate')
                if (input) (input as HTMLInputElement).value = '2025-05-12';
        });
        
        await page.locator("//button[@type='submit']").click();  
          
});
  


