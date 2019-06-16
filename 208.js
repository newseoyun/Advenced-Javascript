// Advenced Loops

const basket = ['apple', 'oranges', 'grapes'];

for (let i = 0; i < basket.length; i++) {
    console.log('1', basket[i]);
}

basket.forEach(item => {
    console.log('2', item);
})

for (item of basket) {  // 굿 
    console.log('3', item);
}

// Iterating - arrays, strings


for (item of 'basket') { 
    console.log('just string', item);
}

const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}


// for in - properties
// enumerating - object

for (item in basket) {
    console.log('in basket', item);
}

for (item in detailedBasket) {
    console.log(item);
}

// for (item of detailedBasket) {  // 에러남
//     console.log(item);
// }