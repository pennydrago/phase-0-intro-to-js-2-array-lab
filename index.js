// Write your solution here!

// Cats array
const cats = ["Milo", "Otis", "Garfield"];

// Function to add a cat to the end of the cats array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to add a cat to the start of the cats array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to remove the last cat from the cats array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to remove the first cat from the cats array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to add a cat to the end of the cats array and return a new array
function appendCat(name) {
  const newCats = [...cats, name];
  return newCats;
}

// Function to add a cat to the start of the cats array and return a new array
function prependCat(name) {
  const newCats = [name, ...cats];
  return newCats;
}

// Function to remove the last cat from the cats array and return a new array
function removeLastCat() {
  const newCats = cats.slice(0, cats.length-1);
  return newCats;
}

// Function to remove the first cat from the cats array and return a new array
function removeFirstCat() {
  const newCats = cats.slice(1);
  return newCats;
}