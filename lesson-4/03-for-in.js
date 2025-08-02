const student =
{
    "name": "Alex",
    "age": 10,
    "salary": 20
};

// 3.1 In tên và giá trị mỗi thuộc tính của student 
for (let property in student) {
    console.log(`${property}: ${student[property]}`)
};

// 3.2 Tính tổng các giá trị số trong student 
let tong = 0;
for (const key in student) {
    if (typeof student[key] === "number") {
        tong += student[key];
    };
};
console.log("Tổng bằng: ", tong);


// 3.3 Tạo mảng chứa tên các thuộc tính của student 

let mangA = []
for (let thuocTinh in student) {
    mangA.push(thuocTinh);
};
console.log(mangA);
