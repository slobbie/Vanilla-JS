// reduce
// 값을 조정 하는 함수 , 초기값 , 이터러블한 값
const reduce = (f, acc, iter) => {
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

const add = (a, b) => a + b;

reduce(add, 0, [1, 2, 3, 4, 5]);

// 기본 자바스크립트에서는 reduce 함수가 acc 가 생략 되었을시
// iter => [1, 2, 3, 4, 5] 의 값 중에 첫번째 값을 빼와서 acc = 1 로 기본 세팅해준다.

// 위와 같이 행동 하게 세팅

const reduce2 = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

// iter 가 생략 되어도 기존 처럼 행동 한다.
reduce(add, [1, 2, 3, 4, 5]);

// 사용 예제

const products = [
  { name: '반팔티', price: 15000 },
  { name: '긴팔티', price: 20000 },
  { name: '핸드폰케이스', price: 15000 },
  { name: '후드티', price: 30000 },
  { name: '바지', price: 25000 },
];

reduce((total_price, product) => total_price + product.price, 0, products);
