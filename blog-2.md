# The Four Pillars of OOP in TypeScript

## Introduction

Object-Oriented Programming (OOP) helps us build scalable and maintainable applications. The four pillars of OOP are:
- Inheritance
- Polymorphism
- Abstraction
- Encapsulation

These concepts help reduce complexity, improve code organization, and make large TypeScript projects easier to manage.

---

# Inheritance

Inheritance allows one class to reuse properties and methods from another class.

## Example

```ts
class Parent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(hours: number) {
    console.log(`${this.name} sleeps ${hours} hours`);
  }
}

class Student extends Parent {
  rollNo: number;

  constructor(name: string, rollNo: number) {
    super(name);
    this.rollNo = rollNo;
  }
}
```

### Benefit
- Reduces duplicate code
- Improves reusability

---

# Polymorphism

Polymorphism allows the same method to behave differently for different objects.

## Example

```ts
class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(public height: number, public width: number) {
    super();
  }

  getArea(): number {
    return this.height * this.width;
  }
}
```

### Benefit
- Makes code flexible
- Simplifies logic handling

---

# Abstraction

Abstraction hides implementation details and exposes only essential functionality.

## Example

```ts
abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
}

class MusicPlayer extends MediaPlayer {
  play(): void {
    console.log("Playing Music");
  }

  pause(): void {
    console.log("Pausing Music");
  }
}
```

### Benefit
- Reduces complexity
- Improves structure

---

# Encapsulation

Encapsulation protects internal data using access modifiers.

## Example

```ts
class BankAccount {
  readonly userId: number;

  private _userBalance: number;

  constructor(userId: number, balance: number) {
    this.userId = userId;
    this._userBalance = balance;
  }

  addBalance(balance: number) {
    this._userBalance += balance;
  }
}
```

### Benefit
- Protects sensitive data
- Prevents unwanted modification

---

# Conclusion

The four pillars of OOP help us write clean and scalable TypeScript applications.

- **Inheritance** → Reusability
- **Polymorphism** → Flexibility
- **Abstraction** → Simplicity
- **Encapsulation** → Data Protection

Together, they make large applications easier to maintain and extend.

> OOP helps transform complex logic into organized and manageable code.