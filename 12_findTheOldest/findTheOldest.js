const findTheOldest = function(people) {
  const peopleByGreatestAge = people
    .sort((a, b) => {
      if (a. yearOfDeath === undefined) {
        a.yearOfDeath = (new Date).getFullYear();
      }
      if (b.yearOfDeath === undefined) {
        b.yearOfDeath = (new Date).getFullYear();
      }
      const ageOfA = a.yearOfDeath - a.yearOfBirth;
      const ageOfB = b.yearOfDeath - b.yearOfBirth;
      return ageOfB > ageOfA ? 1 : -1;
    })
  return peopleByGreatestAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
