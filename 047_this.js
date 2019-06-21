// this keyword

var b = {
    name : 'jay',
    say() { console.log(this) }
}

var c = {
    name : 'jay',
    say() { return function() {console.log(this)} }
    // c.say() 는 다른 펑션을 리턴한다. 그러므로 c.say()() 하면 window 나옴.
}

var d = {
    name : 'jay',
    say() { return () => console.log(this) }
    // d.say()() 이거는 에로우펑션이 현 스코프 내부에서 동작하기때문에 d를 리턴함.
}

// 에로우펑션은 현재 스코프에서만 동작한다는 사실을 기억할 것
//  즉, 스코프를 한정함
