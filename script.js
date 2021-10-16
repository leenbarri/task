
document.getElementById("test").innerHTML = "hello from js ";

document.body.style.backgroundColor = "#e6e6e6";

let a = 10;
let b = 20.25;
let c = "leen";
let d = true;
let s = [1, 2, 3, 4, 5]

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof s);


for(let i = 0; i < s.length; i++)
{
    console.log(s[i]);
}

function sum(num1, num2)
{
    console.log(num1 + num2);
}

sum(10, 15);
