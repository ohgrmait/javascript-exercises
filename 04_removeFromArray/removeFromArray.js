const removeFromArray = function(array, ...numbers) {
  let newArray = []

  for (let i = 0; i < array.length; i++) {
    if (numbers.includes(array[i])) {
      continue;
    }
    newArray.push(array[i]);
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
