let address = '';

const handleInputChange = (event: Event) => {
  event.preventDefault();
  const target = event?.target as HTMLInputElement;
  const updatedPWord = target.value;
  return updatedPWord;
};

/** 배송지 input */
const addressInput = document.querySelector('#addressInput');
if (addressInput) {
  addressInput.addEventListener('change', (e) => {
    address = handleInputChange(e);
  });
}

/** 결제 하기 버튼 */
const onSubmitHandler = () => {
  console.log(address);
};
/** check out 버튼 */
const submitHandler = document.querySelector('#submitHandler');
if (submitHandler) {
  submitHandler.addEventListener('click', onSubmitHandler);
}
