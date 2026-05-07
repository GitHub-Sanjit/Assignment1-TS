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

//* 3

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): string => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};

// console.log(checkType(42));
// console.log(checkType("Hello"));

//* 3

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

// const user = { id: 1, name: "John Doe", age: 21 };
// console.log(getProperty(user, "name"));
