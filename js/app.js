function pinGenarate() {
  const pin = Math.round(Math.random() * 10000);
  if (pin >= 999) {
    return pin;
  } else {
    return pinGenarate();
  }
}

getId("pinBtn").addEventListener("click", function () {
  const pinNumber = pinGenarate();
  const pinInput = getId("pin-input");
  pinInput.value = pinNumber;

  const errorId = getId("error");
  const successId = getId("success");
  const tryId = getId("try");

  isDisplay(errorId, false);
  isDisplay(successId, false);
  isDisplay(tryId, false);
});

getId("body-number").addEventListener("click", function (e) {
  const number = e.target.innerText;

  const numberInput = getId("number-input");
  const numberVaule = numberInput.value + number;
  if (number == "C") {
    numberInput.value = "";
  } else if (number == "<") {
    const inputValue = numberInput.value;
    const inputArray = inputValue.split("");
    inputArray.pop();
    const newInputValue = inputArray.join("");
    numberInput.value = newInputValue;
  } else {
    numberInput.value = numberVaule;
  }
});

let tryCount = 0;
getId("number-submit").addEventListener("click", function () {
  const numberInput = getId("number-input");
  const pinInput = getId("pin-input");
  const errorId = getId("error");
  const successId = getId("success");
  const tryId = getId("try");
  const tryCountId = getId("try-count");
  const numberInputvalue = numberInput.value;
  const pinInputValue = pinInput.value;

  if (numberInputvalue === pinInputValue) {
    isDisplay(successId, true);
    isDisplay(errorId, false);
    isDisplay(tryId, false);
  } else {
    tryCount++;

    isDisplay(successId, false);
    isDisplay(errorId, true);
    isDisplay(tryId, true);

    tryCountId.innerText = tryCount;
  }
  setTimeout(function () {
    numberInput.value = "";
    pinInput.value = "";
  }, 2000);
});
