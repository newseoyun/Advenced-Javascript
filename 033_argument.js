
function marry(person1, person2) {
    console.log(arguments);
    console.log(Array.from(args));
    return `${person1} is now married to ${person2}`
}

marry('Tina', 'Tom');

/* 
arguments는 parameters와 비슷하지만 좀 다름. 혼용해서 쓰기도 함.
단 argument는 인수, parameter는 매개변수로, 
매개변수는 임의의 이름으로 정의할 수 있지만(이름이 있지만) 
인수는 이름이 없다.
엄밀히 말하면 위에서 person1,2는 매개변수이고, tina, tom은 인수임.
JS에서 arguments는 배열로 저장된다. 
그래서 아래와같이 매우 편리하게 접근할 수 있다.
*/


function marry2(...args) {  // 갯수가 정해지지않은 매개변수들을 쉽게 정의
    console.log(arguments);
    console.log(Array.from(args));
    return `${args[0]} is now married to ${args[1]}`
}

marry2('Max', 'Lisa');