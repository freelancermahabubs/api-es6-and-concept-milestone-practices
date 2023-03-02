const person = {id: 12, name: "Mahabub", age: 21, job: "Web Developer"};
const {age, job} = person;
console.log(age, job);

const numbers = [14, 452, 785, 4522, 546,  5];
const [,,, balance] = numbers;
console.log(balance)