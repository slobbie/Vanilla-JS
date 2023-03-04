const products = [
  { name: '반팔티', price: 15000 },
  { name: '긴팔티', price: 20000 },
  { name: '핸드폰케이스', price: 15000 },
  { name: '후드티', price: 30000 },
  { name: '바지', price: 25000 },
];

// map

//

const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

// products 배열안 name 출력
console.log(map((p) => p.name, products));

// products 배열안 price 출력
console.log(map((p) => p.name, products));

// 이터러블 프로토콜을 따른 map 의 다형성

// 이 함수는 작동 하지 않는다 그 이유는 document.querySelectorAll 자체가 map 함수를 가지고 있지 않기 때문
document.querySelectorAll('*').map();

// 앞서 만든 map 함수에서는 정상적으로 동작한다.

map((el) => el.nodeName, document.querySelectorAll('*'));

// 위에 함수가 정상적으로 동작 하는 이유는 document.querySelectorAll 도
// 이터러블 프로토콜을 따르기때문이다

const it = document.querySelectorAll('*')[Symbol.iterator]();
// next()로 값을 순회 할수 있다.
it.next();

// 앞에 만들어진 map 함수는 이터러블 프로토콜을 따르는 많은 함수들을 수용할수 있다.

function* gen() {
  yield 2;
  yield 3;
  yield 4;
}
// 문장으로 이러진 이런 형태도 사용 가능해진다.
map((a) => a * a, gen());
