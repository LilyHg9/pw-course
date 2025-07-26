# Git
## Thay đổi commmit message
Command: Git commit --amend 
- Gõ i -> vào chế độ Insert
- Type 'esc' to exit Insert
- Type ":wq" -> write and quit
Command: git commit --amend -m"message

## Đưa file từ vùng staging về working directory
- Git restore --staged <'file'>

## Đưa file từ vùng repository về working directory (uncommit)
- git reset HEAD~1 (undo 1 commit)
Note: ~(1,2,3,..) số commit muốn revert

## Branch
- Tạo branch: git branch 'tên nhánh'
- Kiểm tra nhánh đang đứng: git branch
    => trả về: *'tên nhánh'
- Di chuyển đến nhánh khác: git checkout 'tên nhánh'
- git checkout -b <'tennhanh'>
- Tại nhánh hiện tại (vd: nhánh A, khi thực hiện commit => chỉ commit ở nhánh A, nhánh main ko ảnh hưởng)

*Note: luôn tạo branch mới trước khi thực hiện một lệnh copy từ internet

## Git ignore
- Dùng để bỏ qua các file không cần git theo dõi
- Ignore file
    <file_name>
- Ignore folder: ignore nhưng file chứa trong foler


## VScode
- Xem các thay đổi
 -Exlorer tab: quản lý files/folder
 -Source control tab: hỗ trợ xem những thay đổi, add file to staging, commmit & push 
 -Extension tab: cài extentions
 -Testing tab: hiển thị file test case
  
# Javascript-
## Convention = quy tắc
- snake_case: 
- kebab-case: đặt tên file
- camel : đặt tên biến
- PascalCase: tên Class

## Console-log
 - Dùng backtick ` để format console log 
 ví dụ: 
 a = "Binh";
 console.log(`Toi la ${a}, hoc sinh lop K16`) //Chen bien vao chuoi
=> in ra: Toi la Binh, hoc sinh lop K16 


## Object
- KN: đối tượng, dùng để lưu trữ tập hợp các gía trị vào cùng một biến hoặc hằng số 
- Khai báo:
let/consst <ten_object> = {
    <thuoc_tinh>: <gia_tri>,
    ...
}
Trong đó:
 - thuộc tính: giống quy tắc đặt tên biến
 - giá trị: có kiểu giống biến, hoặc là 1 object khác
 - Thêm thuộc tính: 
  - a.(thuoc_tinh_moi) = value
  - a["thuoc_tinh_moi"] = value
- Xóa thuộc tính:
 -  delete a.thuoc_tinh_can_xoa

### Truy xuất thuộc tính của đối tượng
ví dụ:
let student = {
    name: "Binh",
    age: 26,
    role: "QA",
    address: {
        number: 38,
        street: "Hung Vuong",
    },
    class: "K16",
    isLearningPlaywright: true
};
=> Truy xuat thuoc tinh name: student.name 
Console.log(`student name: ${student.name}`);

## Logical-operator
&&: cả 2 vế của mệnh đề đều đúng
||: một trong 2 vế đúng
! : đảo ngược gía trị của mệnh đề

## Array
- Khai báo;
let arrayEx = ["a","b","c"]
- Đếm số phần tử: const count = arrayEx.length;
- Truy xuất phần tử: a = arrayEx[0]
- Truy xuất index của phần tử b = arrayEx.indexOf("c");
- Truy xuất một phần tử ko tồn tại trong mảng => sẽ in ra -1
-Thêm phần tử vào mảng: dùng hàm Push
VD: const arr = [1,2];
arr.push(3);

## Function (hàm)
Cú pháp: function <tên hàm> {
    <câu lệnh>
}
- Ví dụ 1:
function hellWord(){
    console.log("Hello World")
};

=> Gọi hàm để lệnh được thực hiện: HelloWorld();
=> Lúc này in ra: Hello World

- Ví dụ 2:
function printStudentName(studentName){
    console.log(`Ten hoc vien ${studentName}`)
};
printStudentName("LuuBinh")

- Ví dụ 3: Viết hàm tính tổng
function calculate(a,b) {
    const sum = a + b;
    return sum;
}
const total = calulate(a,b);
console.log(total);
- ví dụ: Kết hợp hàm for và function
In ra một danh sách tên học viên

let studentArr = ["Bình","Uyên","Giao"];
function printArray(studentArr) {
    for (let i = 0; i < studentArr.length; i++) {
        console.log(student.Array[i]);
    }
}
printArray(studentArr)
