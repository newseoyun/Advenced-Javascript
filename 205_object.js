// Advenced Objects

// reference type

/* 
[] === []; // false
[1] === [1]; // false

var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};

object1 === object2; // true
object1 === object3; // false

// context vs scope

function b() {  //new scope
    let a = 4;
}

console.log(a); // 에러남. a는 b함수 내 레퍼런스값이라서

console.log(this);
//winddow 정보 나옴

console.log(this === window); 
// true

*/
// instantiation
class player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I am a ${this.type}`);
    }
}

class wizard extends player {
    constructor(name, type){
        super(name, type)
    }
    play(){
        console.log(`WWWEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new wizard('shelly', 'Healer');
const wizard2 = new wizard('shawn', 'Dark Magic');

console.log('wizard1 :', wizard1);
console.log('play : ', wizard1.play());
console.log('introduce :', wizard1.introduce());