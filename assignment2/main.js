function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const firstHalf = array.slice(0, middle);
    const secondHalf = array.slice(middle, array.length);

    return combine(mergeSort(firstHalf), mergeSort(secondHalf));
}

function combine(firstHalf, secondHalf) {
    const array = [];
    indexFirst = 0;
    indexSecond = 0;
    //makes the array to return
    while (indexFirst < firstHalf.length && indexSecond < secondHalf.length) {
        if (firstHalf[indexFirst] < secondHalf[indexSecond]) {
            array.push(firstHalf[indexFirst]);
            indexFirst++;
        } else {
            array.push(secondHalf[indexSecond]) 
            indexSecond++
        }
    }
    //checks for extra values in first half
    while (indexFirst < firstHalf.length){
        array.push(firstHalf[indexFirst]);
        indexFirst++;
    }
    //checks for extra values in second half
    while (indexSecond < secondHalf.length){
        array.push(secondHalf[indexSecond]);
        indexSecond++;
    }

    return array;
}

console.log(mergeSort([15,5,213,33,2,243,22,19,4,4500]));