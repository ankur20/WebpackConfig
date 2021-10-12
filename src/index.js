import "./styles/index.css";

const hello = "Hello World, I am using Webapck";
const ankur = {
  age: "33",
  weight: "65",
};
const ankurAftarTransformation = {
  ...ankur,
  weigth: "60",
};
console.log(hello);
console.log(ankur);
console.log(ankurAftarTransformation);
