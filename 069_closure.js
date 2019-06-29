function a() {
    let grandpa = 'grandpa';
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

console.log(a()()());

/* 
a()와 b()는 HOF(Higher Order Function)이다. 

위 함수에서 각 변수들이 출력되는 이유는 스택에서 함수가 사라져도 
각 함수 내의 변수들은 Scope Chain을 형성해서 가능한 것.
메모리 힙?에 저장되어 사용할 수 있기 때문.
이 기능(?)을 Closure 라고 한다.
*/

/*
function boo(string) {
    return function(name) {
        return function(name2) {
            console.log(`${stirng} ${name} ${name2}`)
        }
    }
} 밑에 에어로펑션으로
*/
const boo = (stirng) => (name) => (name2) => console.log(`${stirng} ${name} ${name2}`)

boo('hi')('tim')('becca')


// 이 밑은 뭔지 잘 못알아들었음

const booString = boo('hi');
// 5 year  : 뭔지 잘 모르겠음.. 버전이 발전하는게 5년 걸렸다는건가?
const booStirngName = booStirng();  // 오류남. 