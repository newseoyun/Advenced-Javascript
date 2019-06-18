// Advenced Functions

const multiply = (a, b) => a * b;  // arrow function의 기본
const curriedMultiply = (a) => (b) => a * b; // 겹리턴
const multiplyBy5 = curriedMultiply(5);

console.log(multiplyBy5(5));   // 25
console.log(curriedMultiply(5)(5));  // 25

// (a)는 [(b) => a * b] 를 리턴한다.
// (b)만 리턴하는게 아니라 통째로 리턴한다는 것을 주의할 것


const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;

console.log(compose(sum, sum)(5));  // 7

//  f(g(5)) ---> f(sum(5)) ---> sum(6)
// sum(sum(5))

// 안드레이는 각 동작단계를 scope,
// 작동원리를 currying 이라고 표현하였다.