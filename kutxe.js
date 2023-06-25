// Rest

function students(...rest) {
    console.log('rest = ', rest)
}

students('gio', 'nino', 'mariami');


// Destructure

const mentor = ['misha', 'pailodze', 30];

let firstName;
let age;

[firstName, , age] = mentor;

console.log(firstName);
console.log(age);

//

let a = 10;
let b = 20;

[b, a] = [a, b]

console.log(a);
console.log(b);

//

const mentor2 = {
    firstName2: 'misha',
    lastName2: 'pailodze',
    age2: 30,
    password: '12345'
}

const {password, ...rest2} = mentor2;

//console.log(firstName2);
console.log(rest2);
//console.log(lastName2);
//console.log(age2);
console.log(password);



// for ... of

const allScores = [10,20,30];

for(const score of allScores) {
    console.log(score);
}


// For ... in


const allScores2 = [40,50,60];

for(const indx in allScores2) {
    console.log(indx);
}


const skola = {
    klasi1: 'luka',
    klasi2: 'nika'
};

for(const prop in skola) {
    console.log(skola[prop]);
}




// Hoisting 



