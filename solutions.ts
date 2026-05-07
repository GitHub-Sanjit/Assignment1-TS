const filterEvenNumbers = (numArray: number[]): number[] => {
  const evenNum = numArray.filter((num) => num % 2 === 0);
  return evenNum;
};

const reverseString = (str: string): string => {
  const lastChar = str.length - 1;
  let reverseStr = "";
  for (let i = lastChar; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
  }
  return reverseStr;
};

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): string => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (obj: Book) => {
  return {
    ...obj,
    isRead: true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const set = new Set(arr1);
  const newArr = arr2.filter((num) => set.has(num));
  return newArr;
};
