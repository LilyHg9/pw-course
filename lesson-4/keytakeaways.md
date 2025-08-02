# Javascript
- Phạm vi của biến var và let
    - Ví dụ: Sử dụng var
            
            for (var i = 0; i < 5; i++){
                console.log(i);
            };
            console.log(i);
        => Kết quả:
        ```
        1
        2
        3
        4
        5
        ```
             
    - Ví dụ: Sử dụng let
            
            for (let i = 0; i < 5; i++) {
                console.log(i);
            };
            console.log(i);
            
        => Kết qủa in ra:
        ```
        i is undefined
        ```
- Var: có thể truy cập được vào biến trước khi được khai báo: giá trị undefined
     
- Let: không thể truy cập trước khi khai báo
    -Dùng let để tránh những lỗi khó phát hiện do phạm vi của biến

- Const: dùng khi cần gán giá trị không đổi

## JS-Điều kiện nâng cao: if...else; if..else if, switch..case
- If .. else
    - Syntax:
        ```
        if (condition) {
            run code when condition = true

        } else {
            run code when condition = false
        }
        ```

- If...else if...else
    - Syntax:
        ``` 
        if (condition1) {
            run code when condition = true 
        } else if (condition2) {
            run code when condition2 - true //condi1=false
        } else {
            run conde when all conditions above = false
        }
        ```
    - E.g: 

        ```
        let diem = 9;

        if (diem >= 8) {
            console.log("Hoc sinh gioi");
        } else if (diem >= 6) {
            console.log("Hoc sinh kha");
        } else {
            console.log ("Hoc sinh can cai thien");
        }
        ```
- Switch
    - Syntax:
    ```
    switch(biểu thức) {
        case value_1; 
                run code
                break;
        case value_2;
                run code
                break;
        case value_3;
                run code
                break;
        default:
            run code default
    }

    // Notes: dùng break để thoát ra khỏi switch khi tìm thấy case phù hơp
    ```
## == vs !=
- == vs !=: 
    - So sánh lỏng lẻo
    - Convert giá trị về kiểu lớn hơn
- ===, !==: so sánh tuyệt đối

## Vòng lặp nâng cao:
- for..in => dùng để lấy ra tên các thuộc tính của 1 object/array
    - e.g 1 : Object
    ```
    let product = {
        banana: 20,
        apple: 18,
        orange: 15
    };

    for (let property in product) { // property: khai báo để chứa khác thuộc tính của object
        console.log(property);
        console.log(product["property"]); // thêm thuộc tính property vào object product và truyền giá trị vào thuộc tính này
        }
    ```

    - Lấy ra giá trị của thuộc tính trong object
    ```
     for (let property in product) { // property: khai báo để chứa khác thuộc tính của object
        console.log(property.banana); // cách 1
        console.lg(property["banana"]); // cách 2
        };
    ```
    


    - e.g 2: Array
    ```    
    const arr = ["a","b","c"'];
    for (let i in array) {
        console.log(i);
        console.log(arr[i])
    }
    ```
- forEach: dùng cho array, lấy ra các phần tử gồm index và giá trị trong 1 array
    - *Syntax:*
    ```
    array.forEach(value, index) => {

    }
    ```
    - E.g: 
    ```
    const arr = ["a","b","c"'];

    arr.forEach ((value, index) => {
        console.log(`${index}: ${value}`);
    })    
    ```
- for...of : dùng cho array, dùng để lấy ra các phần tử trong 1 array
    ```
    const arr = ["a","b","c"'];

    for (let value of arr) {
        console.log(value);
        }
    ```
## JS-Break và continue
- Continue
    -  Bỏ qua vòng lăp, chạy vòng lặp tiếp theo
    -  Nếu gặp continue thì bỏ qua đoạn code chạy phía dưới, và chạy tiếp vòng lặp tiếp theo
    - e.g:
    ```
    for (let i = 1; i <=5; i++) {
        if (i % 2 === 0) {
            continue};
        };
    console.log(i);
    ```
    => kết qủa in ra
    ```
    1
    3
    5
    ```
- Break: thoát ra khỏi vòng lặp
    ```
    for (let i = 1; i <=5; i++) {
        if (i % 2 === 0) {
            break};
        };
    console.log(i);
    ```
    => kết qủa in ra
    ```
    1
    ```
## JS- String util
- trim(): loại bỏ khoảng trống đầu cuối 1 string
```
let str = "  K16 Playwright  "
console.log(str);

str = str.trim();

console.log(str);
```

- toLowerCase() và to UpperCase();
    - str.toLowerCase
    - str.toUpperCase

- Includes () -> boolean, kiểu tra 1 một chuỗi có chứa chuỗi con nào không?
    str.includes("K16");
    => true

- Replace();
    - str = str.replace("Playwright,"Cypress");

- Split(); cắt một chuỗi thành 1 array gồm nhiều phần tử
    - str.split(" ")
    => [  'K16','Playwright' ]

- Substring();
    - let str = "Hello world";
    - console.log(str.substring(0.5)); => in ra: Hello

- IndexOf();
    - let str = "Hello world";
    - console.log(str.indexOf("Wordl!"));
    => trả về: 6
    => Nếu ko tìm thấy, trả về: -1

- pop(): Xóa và trả về phần tử cuối cùng của mảng, làm thay đổi mảng gốc

    ```
    let arr = [1,2,3];
    let last = arr.pop(); // arr = [1,2], last = 3;
    console.log(arr); // [1,2]
    console.log(last); // 3 
    ```
- unshift(): Thêm một hoặc nhiều vào đầu mảng, trả về độ dài mới của mảng, làm thay đổi mảng gốc

let arr = [1,2,3];
arr.unshift(0) // arr = [0,1,2,3]
console.log(arr); // [0,1,2,3]

- For of:
    - Bản chất một chuỗi cũng là một mảng
    VD: Chuỗi "Playwright" => bản chất là một mảng gồm các ký tự 
    ["P", "l", "a", "y", "w", "r", "i", "g", "h", "t"]

    => Sử dụng string.length để lấy độ dài của chuỗi và lấy ra từng phần tử một theo index

    - Ví dụ:

    ```
        const str = "K9 2024";
        for (let i = 0; i < str.length; i++) {
            console.log(str[i]);
        } //

        K
        9
        " "
        2
        0
        2
        4
    ```














