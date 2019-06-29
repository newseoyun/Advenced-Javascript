// closure Exercise

function callMeMaybe() {
    const callMe = 'Hi! I am now here!';
    setTimeout(function() {
        console.log(callMe);
    }, 3000);
}

callMeMaybe();

/*
콜백함수는 Hoising을 신경쓸 필요없이 closure를 이용해서 구현할 수 있게 된 것이다...맞나?
*/