/* 

5
true
'To be or not to be'
undefined
null
Symbol('just me')
{}

*/

typeof 5;  // Number
typeof true  // Boolean
typeof 'To be or not to be'  // string
typeof undefined  // undefined
typeof null  // object  오브젝트라고하기엔 좀 이상한데 이건 일단 끼워맞춰놓은거임.
typeof Symbol('just me')   // Symbol
typeof {} //object

typeof [] //object   Array.isArray([1,2]) ->true 이렇게 따로 배열인지 확인
typeof function(){} //function

// 주의! array와 function은 오브젝트에 속함.

function a(){
    return 5;
}

a.hi = 'hihi'          // 그래서 이게 가능함. 오브젝트에 키밸류(.) 추가
console.log(a.hi);




// primitive type  vs  non-primitive(object)
// object 는 reference type

var a = [1, 3, 4, 6, 7];
var b = a;  // 레퍼런스
var c = [].concat(a);  // 복사해서 새로 만듦.

a.push(123414);
console.log(b);

let obj = {a: '1', b: '2', c: '3'};
let clone = Object.assign({}, obj);  // 복사해서 새로 만듦.
obj.c = '5';
console.log(clone);


let clone2 = {...obj}  // 간단쓰
console.log(clone2);

// 오브젝트 안에 오브젝트 있으면 복사할 때 조심해야됨. JSON.parse(JSON.stringify())로 해결