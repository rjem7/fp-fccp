const squareList = (arr) => {
  // Only change code below this line
  return arr
  .filter(a => a > 0 && a % parseInt(a) === 0)
  .map(a => Math.pow(a, 2))
  //return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
