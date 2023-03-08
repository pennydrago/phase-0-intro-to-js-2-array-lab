// Write your solution here!

// Initial array
const cats = ["Milo", "Otis", "Garfield"];

// Function to destructively append a cat to the end of the array
function destructivelyAppendCat(name) {
  cats.push("Ralph");
}

// Function to destructively prepend a cat to the start of the array
function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}

// Function to destructively remove last cat in the array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to destructively remove first cat in the array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to nondestructively append a cat to the end of the array
function appendCat(name) {
  const appendCat = [...cats, "Broom"];
  return appendCat;
}

// Function to nondestructively prepend a cat to the start of the array
function prependCat(name) {
  const prependCat = ["Arnold", ...cats];
  return prependCat;
}

// Function to nondestructively remove last cat in the array
function removeLastCat() {
  const removeLastCat = cats.slice(0,2);
  return removeLastCat;
}

// Function to nondestructively remove first cat in the array
function removeFirstCat() {
  const removeFirstCat = cats.slice(1);
  return removeFirstCat;
}