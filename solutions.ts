const filterEvenNumbers = (numArray: number[]): number[] => {
  const evenNum = numArray.filter((num) => num % 2 === 0);
  return evenNum;
};

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//*  2

const reverseString = (str: string): string => {
  const lastChar = str.length - 1;
  let reverseStr = "";
  for (let i = lastChar; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
  }
  return reverseStr;
};

// console.log(reverseString("typescript"))

