// Here we are going to see why TypeScript exist?, and also we are going to use two versions JavaScript and TypeScript
// like how JavaScript dynamically typed is good and also see the issues for that it is dyanamically typed

function getProduct(id) {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  };
}

// Below here we might get errors because we are referencing a property that doesn't exist and
// this is a common mistake in JavaScript
const product = getProduct(1);
console.log(`The product ${product.Name} costs $${product.price}`); // The product undefined costs $99.5

// Also below here there is not issue but what if we pass arguments in wrong order , as you
// understand you will get error
const showProduct = (name, price) => {
  console.log(`The product ${name} costs $${price}`);
};
