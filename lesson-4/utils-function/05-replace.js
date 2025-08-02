const phoneNumber = "0123 456 789"; 
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567"; 

// 1. Thay khoảng trắng bằng "." trong phoneNumber. 
const formattedPhone = phoneNumber.replaceAll(" ", ".");

console.log(formattedPhone)

// 2. Thay "lỗi" bằng "bug" trong report. 
const fixedReport = report.replace("lỗi", "bug");

console.log(fixedReport); 

// 3. Thay "," bằng "." trong numbersStr. 
const converted = numbersStr.replaceAll(",", ".");

console.log(converted);
