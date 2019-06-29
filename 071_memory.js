// closure and memory efficient

function heavyDuty(index) {
    const bigArray = new Array(7000).fill('ㅋ')
    console.log('created!')
    return bigArray[index]
}

heavyDuty(888)
heavyDuty(888)
heavyDuty(888)

/* 
함수를 실행할 때 마다 bigArray를 만듦. 매우 비효율적
아래는 레퍼런스 타입으로 수정한 버전.
*/

const getHeavyDuty = heavyDuty2();
getHeavyDuty(345)
getHeavyDuty(234)
getHeavyDuty(787)   // 매우 효율적!

function heavyDuty2() {
    const bigArray = new Array(7000).fill('zzz')
    console.log('created Again!')
    return function(index) {
        return bigArray[index]
    }
}

