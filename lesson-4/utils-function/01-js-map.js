const scores = [85, 90, 78]; 

const numbers = [1, 2, 3, 4]; 
// map không làm thay đổi mảng gốc

// 4.1 Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90
    

const adjustedScores = scores.map(score => {
  if (score < 90) {
    return score * 1.10; // tăng 10%
  } else {
    return score * 0.95; // giảm 5%
  }
});

console.log(adjustedScores);


// 4.2 Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi. 
const stringNumbers = numbers.map(num => String(num));

console.log(stringNumbers);

// 4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị. 
const doubled = numbers.map(num => num * 2);

console.log(doubled);
