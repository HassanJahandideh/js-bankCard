// input details
const name = document.getElementById('form-name');
const number = document.getElementById('form-number');
const expMounth = document.getElementById('form-exp-month');
const expYear = document.getElementById('form-exp-year');
const cvc = document.getElementById('form-cvc');

// output details
const cardNumberDisplay = document.getElementById('card-number');
const cardNameDisplay = document.getElementById('card-name');
const cardExpMonthDisplay = document.getElementById('card-exp-month');
const cardExpYearDisplay = document.getElementById('card-exp-year');
const cardCvcDisplay = document.getElementById('card-cvc');

number.addEventListener('input', (e) => {
   let numberValue = e.target.value.replace(/\D/g, '');
   numberValue = numberValue.match(/.{1,4}/g)?.join(' ') || '';

   this.value = numberValue;
   cardNumberDisplay.textContent = numberValue;
});