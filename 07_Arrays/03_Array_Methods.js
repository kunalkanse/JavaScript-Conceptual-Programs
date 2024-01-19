
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

let a = [10, 20, 30, 40, 50]
console.log(a); // [ 10, 20, 30, 40, 50 ]

console.log(typeof a);  // object
console.log(Array.isArray(a));  // true

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

let b = a.push(54, 78, 98, "Hello")
console.log(a); // [ 10, 20, 30, 40, 50, 54, 78, 98, 'Hello' ]

let c = a.pop()
console.log(a); // [ 10, 20, 30, 40, 50, 54, 78, 98]

let d = a.unshift("Kunal")
console.log(a); // [ 'Kunal', 10, 20, 30, 40, 50, 54, 78, 98 ]

let z = a.shift()
console.log(a);     // [ 10, 20, 30, 40, 50, 54, 78, 98]

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

let f = a.map((e) => (e * 2))
console.log(f); // [20, 40, 60, 80,100, 108, 156, 196]

let g = a.filter((e) => e > 50)
console.log(g); // [ 54, 78, 98 ]

let h = a.reduce((f, l) => { return f + l })
console.log(h)  // 380

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

let r = a.find((e) => e > 50)
console.log(r)  // 54

const even = (e) => e % 2 == 0;
console.log(a.some(even));  // true

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
let arr = [100, 200, 300, 400, 500]

for (const i in arr) {
    console.log(i)
}   // 0    1   2   3   4

for (const i of arr) {
    console.log(i);
}   // 100  200  300  400  500

let y = arr.forEach((value, index) => { console.log(`${index} == ${value}`) })
/*
0 == 100
1 == 200
2 == 300
3 == 400
4 == 500
*/

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

const ksk = [95, 91, 12, 51, 95];

console.log(ksk.find(Element => Element % 2 == 0)); // 12




















// let pallindrome = prompt("Enter the string : ")
// let check = pallindrome.split('').reverse().join('')
// console.log(check)

// if(check == pallindrome)
// {
//     console.log("Yes it is pallindrome");
// }
// else
// {
//     console.log("no it is not pallindrome");
// }
