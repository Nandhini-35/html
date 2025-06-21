let fruits=["papaya","orange","pineapple","muskmelon","gova"];
console.log(fruits[3]);
fruits.push("banana");
for( let i=0 ; i<fruits.length ; i++){
    console.log(fruits[i]);
}
let a=fruits.shift(1);
console.log(a);
function myfun() {
    let x=fruits.length;
    console.log(x);

}
myfun();
console.log(fruits.reverse());
let h=[1,2,3,4,5];
let sum = 0;
for(let i=0 ; i<h.length ; i++){
        sum = sum + h[i];

}
console.log(sum);
