

function findAvg(array){
    let sum = 0;
    for(const i of array){
        sum += i;
    }
    return sum/array.length;
}

function findMin(array){
    let min = Number.MAX_VALUE;
    for(const i of array){
        if(i < min){
            min = i;
        }
    }
    return min
}

function findMax(array){
    let max = Number.MIN_VALUE
    for(const i of array){
        if(i > max){
            max = i
        }
    }

    return max
}

function analyze(array){
    return {
        "average": findAvg(array),
        "min":     findMin(array),
        "max":     findMax(array),
        "length":  array.length

    }
}


console.log(findAvg([1,2,3]));
console.log(findMin([1,2,3]));
console.log(findMax([1,2,90]));

export {analyze}