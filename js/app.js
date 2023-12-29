// ui
let input = document.querySelector("#inp");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const sevean = document.querySelector("#sevean");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const devid = document.querySelector("#devid");
const multiply = document.querySelector("#multiply");
let equalTo = document.querySelector("#equal-to");
const clear = document.querySelector("#c");
const dott = document.querySelector("#dott");

const onetype = () => (input.value += 1);

const twotype = () => (input.value += 2);

const threetype = () => parseInt((input.value += 3));

const fourtype = () => parseInt((input.value += 4));

const fivetype = () => parseInt((input.value += 5));

const sixtype = () => parseInt((input.value += 6));

const seveantype = () => parseInt((input.value += 7));

const eighttype = () => parseInt((input.value += 8));

const ninetype = () => parseInt((input.value += 9));

const zerotype = () => parseInt((input.value += 0));

const plusType = () => {
  if (input.value[input.value.length - 1] !== "+") {
    input.value += "+";
  }
};

const dottType = () => {
  if (input.value[input.value.length - 1] !== ".") {
    input.value += ".";
  }
};

const minusType = () => {
  if (input.value[input.value.length - 1] !== "-") {
    input.value += "-";
  }
};

const devidType = () => {
  if (input.value[input.value.length - 1] !== "/") {
    input.value += "/";
  }
};

const multiplyType = () => {
  if (input.value[input.value.length - 1] !== "*") {
    input.value += "*";
  }
};
const clearInput = () => (input.value = "");

const todos = [];

const equalValue = () => {
  todos.push(input.value, eval(input.value));
  input.value = eval(input.value);
  console.log(todos);
};

const checkHistory = () => {
  let output;
  output = `
    <li class="list-group-item">${todos.slice(0, 1)} Equal ${todos.slice(
    1,
    2
  )}</li>
    <li class="list-group-item">${todos.slice(2, 4)}</li>
    <li class="list-group-item">${todos.slice(4, 6)}</li>
    <li class="list-group-item">${todos.slice(6, 8)}</li>
    <li class="list-group-item">${todos.slice(8, 10)}</li>
    <li class="list-group-item">${todos.slice(10, 12)}</li>
    <li class="list-group-item">${todos.slice(12, 14)}</li>
    <li class="list-group-item">${todos.slice(14, 16)}</li>
    <li class="list-group-item">${todos.slice(16, 18)}</li>
    <li class="list-group-item">${todos.slice(18, 20)}</li>
    `;
  const history = document.querySelector("#history");
  history.innerHTML = output;
  let popup = document.querySelector("#popup");
  if (input.value !== "") {
    popup.classList.add("open-popup");
  }
  document.querySelector("#close").addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("open-popup");
  });
};

const message = (msg, className) => {
  const div = document.createElement("div");
  div.className = className;
  div.appendChild(document.createTextNode(msg));
  const container = document.querySelector(".container");
  const ins = document.querySelector(".insert");
  container.insertBefore(div, ins);
  setTimeout(() => {
    div.remove();
  }, 3000);
};

// addEventListner
one.addEventListener("click", onetype);
two.addEventListener("click", twotype);
three.addEventListener("click", threetype);
four.addEventListener("click", fourtype);
five.addEventListener("click", fivetype);
six.addEventListener("click", sixtype);
sevean.addEventListener("click", seveantype);
eight.addEventListener("click", eighttype);
nine.addEventListener("click", ninetype);
zero.addEventListener("click", zerotype);
plus.addEventListener("click", plusType);
minus.addEventListener("click", minusType);
devid.addEventListener("click", devidType);
multiply.addEventListener("click", multiplyType);
dott.addEventListener("click", dottType);
clear.addEventListener("click", function () {
  clearInput();
  message("Cleared your value ✔", "alert alert-warning");
});

equalTo.addEventListener("click", function () {
  if (input.value === "") {
    // message("Please check your value", "alert alert-danger");
  } else {
    // message("Calculation your value ✔", "alert alert-dark text-success");
  }
  equalValue();
});

document.querySelector("#check").addEventListener("click", checkHistory);
