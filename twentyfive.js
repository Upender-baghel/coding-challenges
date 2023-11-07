// const arr1 =[1,2,3,4,5,6,7];

// const arr2 = [5,9,10,11];

// const arr3 =[]

//     for(let i=0 ; i<=arr1.length -1 ; i++){
    
//         arr3.push(arr1[i])
//     }
//     for(let j=0 ; j<=arr2.length -1 ; j++){
        
//         arr3.push(arr2[j])
//     }
// if(arr1==arr2){

// }    






const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const res = diff(arr1, arr2);
console.log(res); 

function diff(arr1, arr2) {
    const sum = [];
  
    for (const num of arr1) {
      if (arr2.indexOf(num) === -1) {
        sum.push(num);
      }
    }
  
    for (const num of arr2) {
      if (arr1.indexOf(num) === -1) {
        sum.push(num);
      }
    }
  
    return sum;
  }
  
 


