// All these code down here shows how to use type annotation

let greet: string = "How are you doing?";

let phoneNumber: number = 250783476739;

let isAvailable: boolean = true;

// Object types

// Arrays
let animal: string[] = ["Goat", "Cow", "Hen", "Lion"];

// Functions
let ishow = (done: boolean, name: string, price: number) => {
  return `The items is available ${done}, and its name is ${name} it costs $${price}`;
};

// Objects

let person: {
  name: string;
  age: number;
};

person = {
  name: "Regis Mucyo",
  age: 23,
};
