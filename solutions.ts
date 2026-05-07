//* 1

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

//* 4

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

// const user = { id: 1, name: "John Doe", age: 21 };
// console.log(getProperty(user, "name"));

//* 5

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
// console.log(toggleReadStatus(myBook));

//* 6

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

// const student = new Student("Alice", 20, "A");
// console.log(student.getDetails());

//* 7

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const set = new Set(arr1);
  const newArr = arr2.filter((num) => set.has(num));
  return newArr;
};

// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
