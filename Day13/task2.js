let arr1=[5,9,1,3];
let arr2=[2,0,7,6];
let con=arr1.concat(arr2);
console.log("concatination:" + con);
let spliced_arr=con.splice(2,2);
console.log("spliced array:" + spliced_arr);
let sor=con.sort();
console.log("sorted array:" + sor);
if(con.includes(2))
{
    console.log("Include");
}
else
{
    console.log("Not include");
}
let x=con.indexOf(6);
console.log("Index of 6 is:" + x
    
);

