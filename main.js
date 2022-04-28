const input = document.querySelector('.inputs');
const inputText = document.querySelector('#input-text');
const inputNumber = document.querySelector('#input-number');
const result = document.querySelector('.output');
const ouputText = document.querySelector('#output-text');
const ouputNumber = document.querySelector('#output-number');
const img = document.querySelector('img');

// 버튼을 클릭 했을 때
window.onSubmitClick = function onSubmitClick() {
  // 1. img가 나와서 빙글 빙글
  img.style.display = 'block';
  result.style.display = 'none';
  setTimeout(() => {
    img.style.display = 'none';
  }, 3000);
  // 2. 입력된 값을 가져와서 각각의 자리에 입력
  setTimeout(() => {
    result.style.display = 'block';
    const resultText = inputText.value;
    const resultNum = Math.floor(10000 / Number(inputNumber.value));
    console.log(resultText, resultNum);
    ouputText.textContent = resultText;
    ouputNumber.innerHTML = resultNum;
  }, 3000);
};
