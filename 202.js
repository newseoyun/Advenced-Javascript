// ES5 and ES6   (ECMAScript === Javascript)

// var , let , const

const player = 'bobby';  // constant value! 못바꿈
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);  // let은 안팎 따로

// inside true
// outside false

experience = 120;
console.log(experience);
// 120

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: true
}

const player2 = obj.player;

console.log(player2);

const greeting = `hello ${obj.player} you seem to be ${obj.experience}.`;
console.log(greeting);

console.log('---${ }--------------------------');

function greet(name='', age=50, pet='cat'){
    return `hello ${name}. you seem to be ${age+20}. what a nice ${pet}!`;
}
console.log(greet());
console.log(greet('nana', 20, 'dog'));
console.log('---Symbol--------------------------');

// Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo'); // 심볼은 특이한 일종의 사용자 정의 타입

console.log('Symbol:', sym2===sym3);

console.log('---arrow function--------------------------');
function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b;

console.log(add(4, 5));
console.log(add2(4, 5));