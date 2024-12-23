const favouriteSongs = ["Tiny Dancer", "Running Up That Hill", "Don't Stop Moving", "Tragedy", "Crazy Horses"];

const pennyDoubleProfit = [1, 2, 4, 8, 16, 32, 64];

const friends = [
    {
        name:"Chris",
        specialskill:"changing lives",
    },
    {
        name:"Lizzie",
        specialskill:"being friendly",
    },
    {
        name:"Ben",
        specialskill:"code rapping",
    },
    {
        name:"Tao",
        specialskill:"hand raising",
    },
    {
        name:"Liz",
        specialskill:"crochet",
    },
    {
        name:"Patrick",
        specialskill:"Call of Duty",
    },
    {
        name:"Tim",
        specialskill:"analogies",
    },
    {
        name:"James",
        specialskill:"friendship",
    },
    {
        name:"Joseph",
        specialskill:"being positive",
    },
    {
        name:"max",
        specialskill:"papier-mache"
    },
];

// Using bracket notation and the correct index, for each person...

// 👉 Console.log the month in which you were born.✅

// 👉 Console.log the month your nan was born.✅

// 👉 Console.log your favorite month.✅

let options = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  console.log("Adam", options[5])

  console.log("Nan", options[7] )

  console.log("Dad", options[7])

  console.log("My favourite month is", options[9])


//   ## Task 3 - Looping and Accessing

// We can use the useful loops we learned to access the items in an array.

// 👉 Declare an index variable and assign it the value of 0.✅

// 👉 In a while loop, console.log the array item at the current index and add 1 to the index variable.✅

// 👉 Have the while loop run until the index is equal to or greater than the array's length property. ✅


// while(index < englishNumbers.length) {
//     console.log(englishNumbers[index]);
//     index + 1;
// }   THIS CRASHED MY BROWSER! :(

let englishNumbers = ["one", "two", "three", "four", "five"];

let index = 0;

while(index < englishNumbers.length) {
    console.log(englishNumbers[index]);
    index += 1;
}

// ## Task 4 - Looping and Accessing

// 👉 Refactor task three to use a for loop instead of a while loop.

for(index < englishNumbers.length; count = 0; count ++ ) {
    console.log(englishNumbers[index]);
    index += 1;
};

let words = ["ben", "ha", "spla", "fa", "ca", "dra"]

for(let i = 0; i <words.length; i ++) {
    words[i] = words[i] + "t"
}
console.log(words)