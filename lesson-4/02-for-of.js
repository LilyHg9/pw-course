// 2.1 In lần lượt từng ký tự của str 
const str = "Playwright"; 
for (const char of str) {
    console.log(char);
};


// 2.2 Tạo mảng đảo ngược từ str 

    let newArr = [];

    for (let i = 9; i >= 0; i--) {
        newArr.push(str[i]);
    }''

    console.log(newArr);

    //Cách 2:dùng reverse()
    const reversedArray = [...str].reverse();
    for (const reverse of reversedArray) {
    console.log(reverse);
};


// 2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr 
    // tim vị trí:L dùng index of
const arr = [1, 2, 3, 4, 3, 55, 23]; 
let firstIndex =  arr.indexOf(3);
let lastIndex = arr.lastIndexOf(3);

console.log("Vi trí đầu tiên của giá trị 3",firstIndex)
console.log("Vị trí cuối cùng của giá trị 3",lastIndex)

// 2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr 
const dupArr = [1, 2, 3, 1, 2, 4, 5];
//idea: nếu firstIndex và last lastIndex bằng nhau thì giá trị đó chỉ xuất hiện một lần
const unique = dupArr.filter (item =>
    dupArr.indexOf(item) === dupArr.lastIndexOf(item)
);
console.log("Các phần tử ko lặp lại: ",unique);


