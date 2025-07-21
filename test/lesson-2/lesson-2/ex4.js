// Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
// Mức cân tối đa = Bằng số lẻ của chiều cao (tính bằng cm)
// Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10

let chieucaocuaban = 163;
let solechieucao = chieucaocuaban % 100; // dùng phép chia dư - cú pháp a % b

let cannanglytuong = (solechieucao * 9) / 10;
let muccantoida = solechieucao;
let muccantoithieu = (solechieucao * 8) / 10;

console.log(
  "Cân nặng ký tưởng: ",
  cannanglytuong,
  "kg ",
  "Mức cân tối đa: ",
  muccantoida,
  "kg ",
  "Mức cân tối thiểu: ",
  muccantoithieu,
  "kg"
);
