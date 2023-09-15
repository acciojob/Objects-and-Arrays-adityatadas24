const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
const team = players;

// Create a shallow copy of the array 'players' using the spread operator
const team1 = [...players];

// Create a shallow copy of the 'person' object using the spread operator
const cap1 = { ...person };

// Test if the variables are working as expected
console.log("team:", team);
console.log("team1:", team1);
console.log("cap1:", cap1);

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
