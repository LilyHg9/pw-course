# Version control system
- VCS: hệ thống quản lý các phiên bản
-Types:
    1. Local: lưu ở máy cá nhân
    2. Centralized: lưu ở một máy tập trung
    3. Distributed: lưu ở nhiêuf máy khác nhau
# Git
- Git & git hub (keypoints)
    1. Git: là công cụ quản lý phiên bản, đưa file vào Git repo
    2. Github: là nơi để upload git repo lên

- Git - three states
    1. Working directory: các file mới hoặc file có thay đổi
    2. Staging area: Các file đưa vào cùng chuẩn bị commit (tạo ra các phiên bản)
    3. Repository
    Các commit(phiên bản)
- Git command:
    1. Khởi tạo thư mục được quản lý bởi Git: Git init
    2. Cấu hình Git:
    - Cho 1 repo  
      - git config user.name "name"
      - git config user.email "email"

    - Cho 1 toàn bộ máy tính (default)
      - git config --global user.name "<name>"
      - git config --gloabl user.email "<email>"

    3. Thêm file vào vùng Staging
    - Git add .  
    - or Git add file
    4. Commit
    - Git commit -m "message"
- Git - commit convention
    - trong lớp: <'type'>: <'short_des'>
        - type:
            - chore: sửa nhỏ lẻ, xóa file ko dùng tới
            - feat: thêm tính năng mới, test case mới
            - fix: sửa lỗi 1 test trước đó
        - Short description: mô tả ngắn gọn

# Javascript basic
- Khai báo biến:
    - var <ten_bien> = <gia tri>;
    - let <ten_bien> = <gia tri>;

- Khác nhau giữa var và let: var khai báo lại được, let thì không

- Hằng số Const: dùng để khai báo các giá trị không thể thay đổi
- Data type: kiểu dữ liệu
    - Có 8 loại kiểu dữ liệu
    1. String: Khai báo chuỗi
    2. Number: khai báo một số
    3. bigint
    4. Boolean: kb một giá trị kiểu đúng sai 
    5. Undefined
    6. Null
    7. Symbol
    8. Object
- Comparison Operators (toán tử so sánh)
    - So sánh hai giá trị giữa 2 biến với nhay
    - Kết quả trả về Boolean
    - Comparison Operators:
        - So sánh hơn kém: >,<
        - So sánh bằng: ==, ===, !=, !==, >=, <=
- Unary operator (toán tử một ngôi)
    - Dùng để tăng hoặc giảm giá trị
        1. i++ bằng với i = i + 1
        2. i-- bằng với i = i - 1
- Conditional (điều kiện)
    - Cú pháp: if (điều kiện) {//code} => Nếu điều kiện đúng, sẽ chạy đoạn code
- Loops (vòng lặp)
    - dùng để thực hiện một đoạn logic một số lần nhất định
    - Cú pháp: for (khởi tạo;điều kiện dừng;điều kiện tăng){ // code }
- Format code: Option + Shift + F
  

