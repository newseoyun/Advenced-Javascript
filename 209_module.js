// modules


// ES6 모듈 내보내기  (모듈의 모음=Webpack)
export const add = (a, b) => a + b;

export default function add(a, b) {
    return a + b;
}

// 모듈 가져오기
import { add } from './add';
import add from './add';

