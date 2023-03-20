function iterationFib(n){
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

iterationFib(8)