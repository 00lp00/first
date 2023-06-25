// Number


let x = 5.1234;
console.log(x.toFixed(2));
// ფიქსავს ციფრს წერტილის მერე მითითებულ რაოდენობაზე 

let y = 5.3456
console.log(typeof y.toString());
// ნამბერს გვანახებს სტრინგში

let a = 5.1267;
console.log(a.toPrecision(3));
// ფიქსავს ციფრს წერტილის მერე მითითებულ რაოდენობაზე და ამრგვალებს

let f = Math.abs(-15);
console.log(f)
// მოდულს აბრუნებს

let g = Math.round(5.96);
console.log(g);
// ამრგვალებს ციფრს

let k = Math.floor(5.96);
console.log(k);
// ციფრს ამრგვალებს ქვევით

let q = Math.ceil(5.15);
console.log(q);
// ციფრს ამრგვალებს ზევით

let l = Math.pow(5, 2);
console.log(l);
// ხარისხში აყვანა (5 ** 2) იგივეა)

let n = Math.sqrt(25);
console.log(n)
// ფესვი

let p = Math.random();
console.log(p);
// რანდომ რიცხვს იღებს 0-დან 1-მდე

let z = Math.max(10, 40, 50, 80);
console.log(z);
// ინფორმაციაში უდიდეს რიცხვს იპოვის (min) - უმცირეს




// String

const message = 'სალამი როგორ ხარ'
let search = 'სალამი'

const found = message.includes(search)
console.log(found) // true or false


const block = '#';
const line = block.repeat(10);

console.log(line)


const welcomeMassage = 'სალამი ლუკა ';
const goodbyeMessage = welcomeMassage.replace('სალამი', 'დროებით');
console.log(welcomeMassage);
console.log(goodbyeMessage);


const b = 'სალამი ნოვატორელებო როგორ ხართ?';
const c = b.split(' ')
console.log(c)


const message1 = 'აუ რა ჩავიცვა?';
const wuwunebs = message1.startsWith('აუ'); // endwith-როგორ მთავრდება
console.log(wuwunebs) // true or false 


const ei = 'Hi how are you?';
console.log(ei.toUpperCase());
console.log(ei.toLocaleLowerCase());


// Array
const array = [1,2,3,4,5];
array.push(6);
console.log(array);


const arr = [1,2,3,4,5,6,7,8];
const removedElement = arr.pop();
const removedElement2 = arr.pop();
console.log(removedElement2); // შლის მარჯვენა ინფორმაციას 



// arr.shift-0 ინდექსზე ამოღება ინფორმაციის, წაშლა



// arr.unshift-0 iინდექსზე ინფორმაციის ჩამატება



const arr2 = [1,2,3,4,5];
arr2.reverse();
console.log(arr2); // ატრიალებს ერეის


const words = ['სალამი', 'ნოვატორებო', 'აბა', 'როგორხართ'];
const words2 = words.join(' ');
console.log(words2)


















