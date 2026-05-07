const filterEvenNumbers = (numArray: number[]): number[] => {
  const evenNum = numArray.filter((num) => num % 2 === 0);
  return evenNum;
};

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));


