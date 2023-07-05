// go

const go = (...args) => {
  // 0의 값이 들어옴
  // (0, (a) => a + 1)
  // (1, (a) => a + 10)
  // 함수의 리턴 되는 값이 다음 셋팅 값이 된다.
  reduce((a, f) => f(a), args);
};


go(
  add(0, 1),
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
  console.log()
)


// pipe
// 함수들이 나열되어 있는 합성된 함수를 만드는 함수


const pipe = (f, ...fs) => (...as) => {
  return go(f(...a), ...fs)
}

//3개의 함수를 연속으로 실행하면서 하나로 축약하는 함수 => 함수를 리턴하는 함수
const f = pipe(
  (a, b) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
)


// go 함수의 활용

const products = [
  { name: '반팔티', price: 15000 },
  { name: '긴팔티', price: 20000 },
  { name: '핸드폰케이스', price: 15000 },
  { name: '후드티', price: 30000 },
  { name: '바지', price: 25000 },
];

add

go(
  products,
  products => filter((p) => p.price < 20000, products),
  products => map((p) => p.price, products),
  prices => reduce(add, prices),
  log
)

// curry
// 함수를 받아서 함수를 리턴하고 인자를 받아서 인자가 원하는 갯수만큼의 인자가 들어왔을때
// 받아 두었던 함수를 나중에 평가 시키는 함수

const curry = (f) => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)

const mult = curry((a, b) => a * b)

// mult 는 함수를 리턴 하는데  _ 의 length가 0 이기에 (..._) => f(a, ..._) 리턴
// a 의 값을 기억 하고 있다가 두었다가 다시 _ 의 값이 들어오면 함수를 실행
console.log(mult(3)) // 3을 저장


console.log(mult(3)(10)) // 30을 저장
// or
const mult3 = mult(3)

console.log(mult(10)) // 30

// 똑같은 값을 리턴


// curry 함수를 filter  map reduce 에 적용 했을시


// 기존
go(
  products,
  products => filter((p) => p.price < 20000, products),
  products => map((p) => p.price, products),
  prices => reduce(add, prices),
  log
)


// curry 적용후
go(
 products,
 filter((p) => p.price < 20000),
 map((p) => p.price),
 reduce(add),
 console.log()
)

// 커리함수로 감싼 함수에 인자 하나를 전달하여 즉시실행 하지 않고 함수를 반환하도록 함

// 반한된 함수는 콜백함수로 go함수에 전달 됨

// 따라서 반환된 함수의 실행 시점과 인자는 go함수에게 위임됨

// go함수 의 정의된 내용에 따라 실행되며 반환된 함수에 products값을 인자로 넘겨 실행

// 결국 go함수의 입장에서 보면

// (products) => curry(filter)((p) => p.price < 20000)(products) === curry(filter)((p) => p.price < 20000)

// 5번 까지의 과정으로 인해 축약 가능


// 위의 코드의 중복 제거


const total_price = pipe(
  map((p) => p.price),
  educe(add),
)


go(
  products,
  filter((p) => p.price < 20000),
  total_price,
  console.log()
)



// 코드를 더욱더 세분화 했을시

 const base_total_price = (predi) => pipe(
  filter(predi),
  total_price
  )

  go(
    products,
    base_total_price((p) => p.price < 20000),
    console.log()
  )
