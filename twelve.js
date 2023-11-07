const arr= [1,-2,-5,2,8,-9,3,-5,-6]
const positive = extract(arr);

function extract(inputArray){
    return inputArray.filter(number=>number > 0) 
}
console.log(positive)


  







