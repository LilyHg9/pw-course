const name = "Nguyễn Văn A"; 
const email = "example@gmail.com"; 
const productName = "MacBook Pro"; 
const description = "Khóa học JavaScript cơ bản"; 

// 1.1 Kiểm tra "Nguyễn" trong name. 

const hasNguyen = name.includes("Nguyễn");
console.log(hasNguyen);

// 1.2 Kiểm tra "@" trong email. 

const hasA = email.includes("@");
console.log(hasA);

// 1.3 Kiểm tra "Pro" trong productName. 
const hasPro = productName.includes("Pro");
console.log(hasPro);