// 4. Tạo file test4.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 4: Personal notes”. 
// // a. Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn (khoảng 3 dòng) tại báo https://vnexpress.net/khoa-hoc, 
// // b. Thực hiện search theo tiêu đề bài báo bất kì. 
import { test }from "@playwright/test";

test("Test 04", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.goto("https://material.playwrightvn.com/04-xpath-personal-notes.html");
    
    // Thêm mới 10 note
    for (let i = 0; i < 10; i++) {
        await page.locator('//input[@id="note-title"]').fill(`Tiêu đề ${i + 1}`);
        await page.locator('//textarea[@id="note-content"]').fill(`Diễn viên AI thay thế Thùy Tiên trong 'Chốt đơn'
        Nhà sản xuất dùng công nghệ AI thay toàn bộ hình ảnh hoa hậu Thùy Tiên trong phim "Chốt đơn"`);
        await page.locator('//button[@id="add-note"]').click();
    }

    // // Thực hiện search theo tiêu đề bài báo bất kì
    await page.locator('//input[@id="search"]').fill("Tiêu đề 1");

});