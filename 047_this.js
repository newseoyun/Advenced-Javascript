// this keyword

var b = {
    name : 'jay',
    say() { console.log(this) }
}
// b 객체 리턴

var c = {
    name : 'jay',
    say() { return function() {console.log(this)} }
    // c.say() 는 다른 펑션을 리턴한다. 그러므로 c.say()() 하면 window 나옴.
}

var d = {
    name : 'jay',
    say() { return () => console.log(this) }
    // d.say()() 이거는 에로우펑션이 현 스코프 내부에서 동작하기때문에 d를 리턴함. (lexical scope)
}


// 화살표함수는 자기 자신의 this가 없다. 
// 함수마다 this가 바인딩 되던 예전 버전에서는 객체지향에 안좋았다.
// 화살표 함수에서 this를 찾으면, 자신을 둘러싸는 렉시컬 범위(lexical scope)의 this가 사용되어서 바로 바깥의 this를 가져온다.
