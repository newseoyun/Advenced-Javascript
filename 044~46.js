// call apply bind  and  curring
// call() apply() 기능 비슷. apply( []) 배열사용
// bind() 새로운 function 만듦.


const array = [1, 2, 3];

function getMaxNumber(arr){
    return Math.max.apply(null, arr);
}
console.log(getMaxNumber(array));



// function currying
// 하나의 function을 이용해서 여러 object를 생성함

function multiply(a, b){
    return a * b;
}

let multiplytwo = multiply.bind(this, 2);

console.log('2*6', multiplytwo(6));

let multiplyten = multiply.bind(this, 10);

console.log('10*8', multiplyten(8));