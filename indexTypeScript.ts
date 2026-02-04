// Here we are going to solve the issues we had in index.js, how JavaScript being dynamically typed is some how bad

// First of all we use interface to declare our types for that object
interface Product {
  id: number;
  name: string;
  price: number;
}

function gtProduct(id: number): Product {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  };
}

// Down here when you reference a property that doesn't exist, the code editor will inform you immediately
const prduct = gtProduct(1);
console.log(`The product ${product.Name} costs $${product.price}`);

// Also here if you miss the argument order, editor will tell you early before you run anything
const shwProduct = (name: string, price: number) => {
  console.log(`The product ${name} costs $${price}`);
};

shwProduct(product.price, product.name);

// I changed variable names in order to notice these warning in editor
