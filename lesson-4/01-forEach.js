// Dữ liệu dùng chung cho các bài tập: 
const numbers = [1, 2, 3]; 
const str = "Playwright"; 
const student = { "name": "Alex", "age": 10, "salary": 20 }; 
const arr = [1, 2, 3, 4, 3, 55, 23]; 
const dupArr = [1, 2, 3, 1, 2, 4, 5]; 

//1.1 In lần lượt từng phần tử của numbers. 

    //Dùng forEach
// numbers.forEach(function(number) {
//     console.log(number);
// });

    //Dùng for 
for (const i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
};

//1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers 
let sum = 0; 
let max = numbers[0];
let min = numbers[0];


 for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if(numbers[i] > max){ 
        max = numbers[i];
    };
    if(numbers[i] < min) {
        min = numbers[i];
    }
 };

 console.log("Tổng: ", sum);
 console.log("Giá trị nhỏ nhất: ",min);
 console.log("Giá trị lớn nhất: ",max);

 //1.3 Tạo mảng mới từ numbers, mỗi phần tử nhân đôi

let newArray = [];

for (let i = 0; i < numbers.length; i++) {
    newArray.push(numbers[i]*2);
};
console.log(newArray);

