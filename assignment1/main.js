function fibs(n){
    let array = []
    let num = 0;
    let temp = 0;
    let num1 = 1;
    array.push(num);
    for (let i = 1; i < n; i++){
        array.push(num1);
        temp = num1;
        num1 = num + num1;
        num = temp;
    }
    console.log(array);
}

fibs(8)

function fibsRec(n){
   // solving without array
    // if (n < 2){
    //     return n;
    // } else{
    //     return (fibsRec(n-1) + fibsRec(n-2))
    // }
 
    //solving with the array
 if (n === 1){
        return[0];
    } else if (n === 2){
        return [0,1];
    }return [...fibsRec(n-1), fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3]]
}
let answer=fibsRec(8);
console.log(answer)