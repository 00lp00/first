// function declaration
function welcome(userFirstName, messages = 0) {
    return `სალამი ${userFirstName}, შენ გაქვს ${messages} მესიჯი`;
}

console.log(welcome('ლუკა'));


function calculateAge(birthYear) {
    return 2023 - birthYear;
}

// const age = calculateAge(2000);

if(calculateAge(2000) > 18) {
    console.log('გილოცავ შენ სრულწლოვანი ხარ!');
}




// ფუნქციის სინტაქსები


// function expression
const welcome2 = function(userFirstName2, messages2) {
    return `სალამი ${userFirstName2}, შენ გაქვს ${messages2} მესიჯი`;
}



// arrow function expression
const welcome3 = (userFirstName3, messages3) => {
    return `სალამი ${userFirstName3}, შენ გაქვს ${messages3} მესიჯი`;
}



// arrow function - ის სინტაქსები
const welcome4 = userFirstName4 => {
    return `სალამი ${userFirstName4}`;
}
// ერთი პარამეტრის შემთხვევაში ფრჩხილები შეგიძლია დაიკიდო`



const welcome5 = userFirstName5 => `სალამი ${userFirstName5}`;
// პირველი ბრძანება თუ არის return შეგიძლია {} ად return დაიკიდო




// retur - ის შემდეგ ვერაფერს გაუშვებ!
// retur - ის შემდეგ ყველა კოდი იქნება unrichbl code

const logo = 80;
console.log(logo);















