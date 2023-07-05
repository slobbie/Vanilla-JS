const filter = (f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};

const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

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

const products = [
  { name: '반팔티', price: 15000 },
  { name: '긴팔티', price: 20000 },
  { name: '핸드폰케이스', price: 15000 },
  { name: '후드티', price: 30000 },
  { name: '바지', price: 25000 },
];

// map + filter + reduce 중첩 사용과 함수형 사고

// products 의 금액들만 뽑는다.
// 특정 금액 들만 뽑고싶다.
// 특정 금액으로 뽑힌 값을 모두 더한다

const add = (a, b) = a + b

reduce(
  add,
  map(
    (p) => p.price,
    filter((p) => p.price < 20000, products)
  )
);

// 필터와 맵의 순서를 바꿔도 동일
reduce(
    filter(
      add,
      (n) => n < 20000,
      map((p) => p.price, products)
    )
  );
