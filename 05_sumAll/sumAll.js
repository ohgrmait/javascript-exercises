const sumAll = function(start, end) {
  if (start < 0 || end < 0) {
    return 'ERROR';
  }

  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return 'ERROR';
  }

  let sum = 0;
  
  let min = Math.min(start, end);
  let max = Math.max(start, end);

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
