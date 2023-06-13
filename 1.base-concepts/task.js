"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (b ** 2) - 4 * a * c;
  if (discriminant < 0) {
    return arr;
  } else if (discriminant == 0) {
    let root = (-b) / (2 * a);
    arr.push(root);
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }

  return arr;
}

console.log(solveEquation(1, 5, 4));


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (P + (P / (((1 + P) ** countMonths) - 1)))
  let totalPayment = (monthlyPayment * countMonths).toFixed(2);
  let finalPayment = Number(totalPayment);

  return finalPayment;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
