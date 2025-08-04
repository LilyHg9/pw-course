// 3. Tạo file test3.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 3: Todo page”. 
// // a. Thêm mới 100 todo item có nội dung “Todo <i>” 
// // b. Xoá các todo có số lẻ


import { test } from "@playwright/test";

test("Test 03", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.goto("https://material.playwrightvn.com/03-xpath-todo-list.html");

    // Thêm mới 100 todo item
    for (let i = 1; i <= 3; i++) {
        await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
        await page.locator("//button[@id='add-task']").click();
    }

    // Xoá các todo có số lẻ
    for (let i = 1; i <= 20; i += 2) {
        const deleteBtn = page.locator(`#todo-${i}-delete`);
        if (await deleteBtn.isVisible()) {
            await deleteBtn.click();
        }
    }
});