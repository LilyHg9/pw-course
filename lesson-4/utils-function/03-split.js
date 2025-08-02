//Chia tách chuỗi (split) 
const name = "Nguyễn Văn A"; 
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com"; 
const date = "2024-05-19";

// 1. Chia name thành mảng các từ (dùng khoảng trắng). 
const nameParts = name.split(" ");

console.log(nameParts);

// 2. Chia emails thành mảng các email (dùng dấu phẩy). 
const emailParts = emails.split(",")
console.log(emailParts);

// 3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang). 
const datelParts = date.split("-")
console.log(datelParts);