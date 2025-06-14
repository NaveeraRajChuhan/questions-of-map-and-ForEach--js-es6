// --------------------------------------------QUESTIONS-------------------------------------------

// ........................ForEach........................

// const names = ["Ali", "Fatima", "Hassan", "Zainab"];

// names.forEach(name => {
// console.log(`${name} has ${name.length} letters`);
// });



// 2.......
// const num = [1, 4, 7, 10, 13];

// num.forEach(function (number) {
//     if (number % 2 === 0) {
//         console.log(number + " is even");
//     } else {
//         console.log(number + " is odd");
//     }
// });





// 3........
// const users = [
//     { name: "Naveera", score: 90 },
//     { name: "Nazish", score: 75 },
//     { name: "Filza", score: 88 }
// ];

// users.forEach(function (user) {
//     console.log(`User ${user.name} scored ${user.score}`);
// });




// 4.........
// const urls = [
//     "https://example.com",
//     "https://openai.com",
//     "https://github.com"
// ];

// urls.forEach(function (url) {
//     console.log(`Fetching: ${url}`);
// });




// 5..........
// const words = ["apple", "banana", "cherry"];

// words.forEach(function (word) {
//     const reversed = word.split("").reverse().join("");
//     console.log(reversed);
// });






// 6*******""
// const strings = ["apple", "banana", "cherry"];

// const lengths = strings.map(function (word) {
//     return word.length;
// });

// console.log(lengths);






// 7**********
// const numbers = [2, 4, 6, 8];

// const result = numbers.map(function (num, index) {
//     return num * index;
// });

// console.log(result);






// 8**********
const people = [
    { name: "miss hira", age: 25 },
    { name: "miss tayabba", age: 30 },
    { name: "miss qurat", age: 22 }
];

const messages = people.map(function (person) {
    return `${person.name} is ${person.age} years old`;
});

console.log(messages);









// 9*********
// const words = ["Hello", "WORLD", "JavaScript", "MAP"];
// const lowerCaseWords = words.map(word => word.toLowerCase());

// console.log(lowerCaseWords);
// Output: ["hello", "world", "javascript", "map"]
