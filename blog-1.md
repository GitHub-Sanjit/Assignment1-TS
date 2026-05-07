# Understanding Generics in TypeScript

## Introduction

Generics are one of the most powerful features of TypeScript. They help us write reusable and flexible code while maintaining strict type safety.

Without Generics, we often need to write separate functions for different data types or use `any`, which removes type safety.

With Generics, we can create reusable components that work with any type while TypeScript still remembers the exact data structure.

---

# Generic Functions

Without Generics, we may write multiple functions like this:

```ts
const createArrayWithString = (value: string) => [value];

const createArrayWithNumber = (value: number) => [value];
```

Both functions do the same thing. Generics can be helpful to solve this problem.

```ts
const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrayWithGeneric("Apple");

const arrNumber = createArrayWithGeneric(222);

const arrObj = createArrayWithGeneric({
  id: 123,
  name: "sanjit",
});
```

Here, `T` represents any type. TypeScript automatically understands the correct type for each value.

---

# Multiple Generic Types

Generics can also use multiple type parameters.

```ts
const createArrayTupleWithGeneric = <X, Y>(
  param1: X,
  param2: Y
) => [param1, param2];

const res1 = createArrayTupleWithGeneric(222, "sanjit");

const res2 = createArrayTupleWithGeneric(222, {
  id: 1,
  name: "sanjit",
});
```

This keeps both values strictly typed.

---

# Generic Type Aliases

Generics are useful for reusable type aliases.

```ts
type GenericArray<T> = Array<T>;

const friends: GenericArray<string> = ["A", "B", "C"];

const rollNumbers: GenericArray<number> = [4, 7, 12];
```

This allows the same structure to work with different types.

---

# Generic Interfaces

Generics also make interfaces flexible and reusable.

```ts
interface Developer<T> {
  name: string;
  salary: number;
  smartWatch: T;
}
```

Usage:

```ts
type SmartWatch = {
  heartRate: string;
  callSupport: boolean;
};

const richDeveloper: Developer<SmartWatch> = {
  name: "Rich",
  salary: 100,
  smartWatch: {
    heartRate: "Okay",
    callSupport: true,
  },
};
```

TypeScript ensures the object follows the correct structure.

---

# Conclusion

Generics help developers like us:
- Write reusable code
- Maintain strict typing
- Reduce duplicate code
- Build scalable applications

Whether working with functions, arrays, interfaces, or APIs, Generics make TypeScript code more flexible and reliable.

> Generics allow us to write reusable code without sacrificing type safety.