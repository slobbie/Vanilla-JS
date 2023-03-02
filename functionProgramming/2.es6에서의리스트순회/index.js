// 기존과 달라진 es6에서의 리스트 순회
// - for i++
// - for of

// 기존의 리스트 순회
// 명령적 기술
const list = [1, 2, 3];
for (var i = 0; 1 < list.length; i++) {
  console.log(list[i]);
}

const str = 'abc';
for (var i = 0; 1 < str.length; i++) {
  console.log(str[i]);
}

// es6
// 선언적 사용
for (const a of list) {
  console.log(a);
}

for (const a of str) {
  console.log(a);
}

// javaScript 내장 객체

// Array를 통해 알아보기 ---------------------------------------------------------
const arr = [1, 2, 3];

for (const a of arr) log(a);

// Set을 통해 알아보기
const set = new set([1, 2, 3]);

for (const a of set) log(a);

// Map을 통해 알아보기 ---------------------------------------------------------
const map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);

for (const a of map) log(a);

map.keys(); // iterator를 반환한다
//{'a', 'b', 'c'}
// iterator를.next()를 할 경우 value 의 key 만 출력

for (const a of map.keys()) log(a); // key 값만 출력 'a', 'b', 'c'
for (const a of map.values()) log(a); // value 값만 출력 1, 2, 3
for (const a of map.entries()) log(a); // ['a', 1], ['b', 2], ['c', 3],

map.values();
// MapIterator {1, 2, 3}

// 이터레이터로 만든 값이 다시 또 심볼 이터레이터를 가지고 있다.
let it = map.values();
// it[symbol.iterator]

// 생성된 이터레이터를 실행시 자기 자신이 출력된다.
let it2 = it[Symbol.iterator]();

// 이터러블 / 이터레이터 프로토콜
// - 이터러블: 이터레이터를 리턴하는 [symbol.iterator]() 를 가진 값 -> arr , Map, set 등
// - 이터레이터: {value, done} 객체를 리턴하는 next() 를 가진 값
//   - iterator.next() -> {value: 1, done: false} -> value 가 더이상 없다면 done 은 true
// - 이터러블 / 이터레이터 프로토콜: 이터러블을 for ...of, 전개 연산자 등고 함계 동작하도록 규약

// 이터러블 알아보기 ---------------------------------------------------------

// const arr = [1, 2, 3];

let iterator = arr[Symbol.iterator]();

iterator.next(); // {value: 1, done: false}

iterator.next(); // {value: 1, done: false}

iterator.next(); // {value: 1, done: false}

iterator.next(); // {value: undefined, done: true}

// 정리

// for ...of 는 이터러블 프로토콜을 따르고 있다.

// for ...of 는 iterator.next() 를 순회 하면서 실행 시켜주고 {value: '', done: false} 에서

// value 에 해당하는 값을 출력해주는 원리를 가지고 있다.

// 사용자 정의 이터러블, 이터러블/ 이터레이터 프로토콜 정의

// 사용자 정의 이터러블을 통해 알아보기

const iterable = {
  [symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i == 0
          ? { value: i--, done: true }
          : { value: i--, done: false };
      },
      // 자기 자신도 이터러블 이면서 심볼 이터레이터를 실행했을시 자기 자신을 실행하게 해야한다.
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

let iterator2 = iterable[symbol.iterator]();

// 가능 , iterator2 의 값과 같음
for (const a of iterable) console.log(a);

const arr2 = [1, 2, 3];
