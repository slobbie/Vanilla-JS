// 제너레이터 / 이터레이터

// 제너레이터 : 이터레이터 이자 이터러블을 생성하는 함수

// 제너레이터는 일반 함수 이름 앞에 * 을 붙여준다.
// 제너레이터 함수는 이터레이터를 반환한다.
// 제너레이터 에서는 yield 를 통해 몇번의 next()로 값을 꺼낼수 있는지 정할수 있다.
function* gen() {
  yield 1;
  yield 2;
  yield 3;
  // 마지막의 리턴값을 정해줄수 있다. done 이 true 가 되면서 반환된다
  return 100;
}

// 이터레이더 이자 이터러블이다.
let iter = gen();

for (const a of gen()) log(a);

// javascript 에서는 어떠한 값이든 이터러블이면 순회 할수 있다.
// 제너레이터는 앞의 코드와같이 문장을 통해 순회 할수 있는 값을 만들수 있다.

// 무한으로 값은 증가하지만 내가 next()로 값을 평가할때만 작동하기때문에 오류가 일어나지 않음
// 무한 수열 표현
function* infinity(i = 0) {
  while (true) yield i++;
}

// adds
// 홀수만 반환 하는 제너레이터
function* odds(l) {
  for (let i = 0; i < l; i++) {
    if (i % 2) yield i;
  }
}

let iter2 = add(10);

// l 의 숫자까지 홀수 반환

function* add2(l) {
  for (const a of infinity(1)) {
    if (a % 2) yield i;
    if (i == l) return;
  }
}

// limit 까지 값을 반환

function* limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a == l) return;
  }
}

// 혼합

function* add3(l) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield i;
  }
}

// 위의 코드를 이용해 40까지 홀수를 반환 하는 함수 작성
for (const a of odds3(40)) log(a);

// 전개 연산자 , 구조 분해, 나머지 연산자

console.log(...odds3());

console.log([...odds3(10)], [...odds3(20)]);

let m = new Map();

m.set('a', 10);
m.set('a', 20);

console.log(new Map(map(([k, a]) => [k, a * 2], m)));
