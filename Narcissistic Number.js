// **  Narcissistic Number Challenge
// **  number (153) => correct output => 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// **  number (1652) correct output => 1^4 + 6^4 + 5^4 + 2^4= 1 + 1296 + 625 + 16 = 1938

// ** Narcissistic Numbers Examples => 1, 1634, 93084, 92727
// ** Non Narcissistic Numbers Examples => 3134, 2403, 242423, 1652

const narcissistic = value => {
  const valToArr = `${value}`.split("");

  let result = 0;
  for (let i = 0; i < valToArr.length; i++) {
    // result += Math.pow(valToArr[i], valToArr.length);
    result += valToArr[i] ** valToArr.length;
  }
  console.log(result);

  if (result === value) {
    return true;
  }

  return false;
};

console.log(narcissistic(3134));
