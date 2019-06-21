// 아래 코드는 안된다. 고쳐보자
/* 
const character = {
    name : 'Simon',
    getCharacter() {
        return this.name;
    }
}

const giveMeTheCharacterNOW = character.getCharacter;

console.log('?', giveMeTheCharacterNOW()); //Simon 나와야함
*/

// 내 풀이
const character = {
    name : 'Simon',
    getCharacter() {
        return ()=> this.name;
    }
}

const giveMeTheCharacterNOW = character.getCharacter();

console.log('?', giveMeTheCharacterNOW());



// 정답
const character2 = {
    name : 'Simon',
    getCharacter() {
        return this.name;
    }
}

const giveMeTheCharacterNOW2 = character2.getCharacter.bind(character2);

console.log('?', giveMeTheCharacterNOW2());