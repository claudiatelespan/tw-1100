// const privateCounter = (() =>{
//     let count = 0;
//     console.log(`initial value ${count}`);

//     return() => {
//         count++;
//         console.log(`current value ${count}`);
//     }
// })();

const privateCounter2 = (() => {
    let count = 0;
    console.log(`initial value ${count}`);

    return{
        increment:() => {
            count++;
            console.log(`current value ${count}`);
        },
        decrement:() =>{
            count--;
            console.log(`current value ${count}`);
        }
    }
})();

privateCounter2.increment();

privateCounter2.decrement();