const scores = [85, 90, 78]; 
const numbers = [1, 2, 3, 4]; 
const expenses = [50, 100, 150];

// 6.1 Tính tổng các giá trị trong scores. 
const totalScore = scores.reduce((sum, score) => sum + score, 0);

console.log(totalScore);

// 6.2 Tính tích các giá trị trong numbers. 
const product = numbers.reduce((result, num) => result * num, 1);

console.log(product);


// 6.3 Tính tổng các giá trị trong expenses.

const totalExpenses = expenses.reduce((sum, expense) => sum + expense, 0);

console.log(totalExpenses);