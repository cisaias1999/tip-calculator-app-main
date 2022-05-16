const bill = document.querySelector(".input_bill");
const tipsBtn = document.querySelectorAll(".tip_button_select");
const inputCustom = document.querySelector(".input_custom");
const inputNumber = document.querySelector(".input_number_people");
const btnReset = document.querySelector(".button_reset");
let result = document.querySelector(".right_amount");
bill.addEventListener("input", setBillValue);
inputNumber.addEventListener("input", setInputNumberValue);
inputCustom.addEventListener("input", setInputCustomValue);
console.log(result.innerHTML);
var setBill = 0.0;
var setTipValue = 0.15;
var setInputNumber = 0.0;
var setInputCustom = 0.0;

function setBillValue() {
  setBill = bill.value;
  console.log(setBill);
  resultsTips();
}

function setInputNumberValue() {
  setInputNumber = inputNumber.value;
  console.log(setInputNumber);
  resultsTips();
}
function setInputCustomValue() {
  setInputCustom = inputCustom.value / 100;
  console.log(setInputCustom);
  tipsBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
  resultsTipsCustom();
}

tipsBtn.forEach((btn) => {
  btn.addEventListener("click", setTipsBtn);
});

function setTipsBtn(event) {
  tipsBtn.forEach((btn) => {
    btn.classList.remove("active");
    if (event.target.innerHTML == btn.innerHTML) {
      btn.classList.add("active");

      inputCustom.value = "";
      setTipValue = parseFloat(btn.innerHTML) / 100;
      resultsTips();
    }
  });
}

btnReset.addEventListener("click", resetScreen);

function resetScreen() {
  bill.value = "";
  inputCustom.value = "";
  inputNumber.value = "";
  tipsBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
}

function resultsTips() {
  let right_amount = (setBill * setTipValue) / setInputNumber;
  console.log(right_amount);
  document.querySelector(".right_amount").innerHTML =
    "$" + right_amount.toFixed(2);

  let right_person = setBill / setInputNumber + right_amount;
  document.querySelector(".right_person").innerHTML =
    "$" + right_person.toFixed(2);
}

function resultsTipsCustom() {
  let right_amount = (setBill * setInputCustom) / setInputNumber;
  console.log(right_amount);
  document.querySelector(".right_amount").innerHTML =
    "$" + right_amount.toFixed(2);

  let right_person = setBill / setInputNumber + right_amount;
  document.querySelector(".right_person").innerHTML =
    "$" + right_person.toFixed(2);
}
