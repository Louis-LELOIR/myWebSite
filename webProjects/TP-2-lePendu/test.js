const users = [
    {
    username: 'suraj123',
    },
    {
    username: 'mike1',
    },
    {
    username: 'lisa78',
    }
];

// user object to check in the users array
const user = {
username: 'suraj123',
};

// using an arrow function
if (users.some(u => u.username === user.username) === true) {
    console.log("YES!");
} else {
console.log("NO!");
}




let myObject = [
    {index: "A"},
    {index: "B"},
    {index: "O"},
    {index: "I"},
    {index: "E"},
    {index: "M"},
    {index: "E"},
    {index: "N"},
    {index: "T"},
    {index: "S"}
];

let test = {index: "A"};

// using an arrow function
if (myObject.some(u => u.index === test.index) == true) {
console.log("YES!");
} else {
console.log("NO!");
}
