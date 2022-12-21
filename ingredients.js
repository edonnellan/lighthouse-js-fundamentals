const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let i = 0

while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
};

// Write a for loop that prints out the contents of ingredients:

for (let b = 0; b < ingredients.length; b++) {
  console.log(ingredients[b]);
};

// Write any loop (while or for) that prints out the contents of ingredients backwards:

let reversed = ingredients.reverse();

for (let b = 0; b < reversed.length; b++) {
  console.log(ingredients[b]);
};
