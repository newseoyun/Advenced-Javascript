// Closure and Encapsulation

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return '펑펑펑'
    }
    setInterval(passTime, 1000);
    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime
    }
}


const ohno = makeNuclearButton();
ohno.totalPeaceTime();

/*
 리턴에 안 넣은 값은 접근할 수 없음. 
만약 리턴 오브젝트의 launch를 삭제하면 ohno.launch() 실행할 수 없음
*/