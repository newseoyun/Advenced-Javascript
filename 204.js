// Advenced Arrays

const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
});
console.log(newArray); // undefined
console.log("forEach:", double);


// map, filter, reduce
// map은 각 요소를 각각 되풀이함(loop)
// map은 꼭 리턴을 줘야함. 이유는 밑에

const mapArray = array.map((num) => {
    return num * 2;
});

// const mapArray = array.map(num => num * 2)

console.log("map:", mapArray);

// function이 동작하는 가장 기본적이고 핵심적인 개념은 
// input > [function] > return something(undefined  or  value)  임.
// function내의 console.log()같은 것들은 function의 side effects 이고
// 가장 pure 한 동작은 return!
// 그래서 map이 return을 통해 확실한 동작과 아웃풋을 냄.
// avoiding side effects, functional purity!.