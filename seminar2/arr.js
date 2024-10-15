const arr = [1,2,3,4];

//console.log(arr.length);
arr.push(5);

const lastItem = arr.pop();

arr.shift();

console.log(arr);
//console.log(lastItem);

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for(item of arr){
//     console.log(item);
// }

// for(item in arr){
//     console.log(item); //returneaza string
// }

arr.forEach(item =>{
    console.log(item);
})