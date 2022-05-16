const bill = document.querySelector(".input_bill");
const tipsBtn = document.querySelectorAll(".tip_button_select");

bill.addEventListener("input", setBillValue);

function setBillValue() {
  console.log(bill.value);
}

tipsBtn.forEach((button) => {
  button.addEventListener("click", setTipsBtn);
});

function setTipsBtn(event) {
  tipsBtn.forEach((btn) => {
    btn.classList.remove("active");
    if (event.target.innerHTML == btn.innerHTML) {
      btn.classList.add("active");
    }
  });
}
