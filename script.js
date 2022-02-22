const form = document.querySelector("form");
const nameUser = document.getElementById("name-user");
const email = document.getElementById("email");
const radioTrip = document.getElementsByName("isTripe");
const description = document.getElementById("description");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const btnSubmit = document.getElementById("btn-submit");
const inputMonth = document.querySelector("dropDawn");

const createUser = [];

const monthArray = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

function createMonth() {
  const elementsDropDown = document.querySelector(".listDropDown");

  for (let i = 0; i < monthArray.length; i += 1) {
    const elementsDrop = document.createElement("div");
    elementsDrop.classList = "item";
    elementsDrop.innerText = monthArray[i];
    elementsDropDown.appendChild(elementsDrop);
  }
}

createMonth();

function verifyRadio() {
  for (let i = 0; i < radioTrip.length; i += 1) {
    if (radioTrip[i].checked == true) {
      return radioTrip[i].id;
    }
  }

  return null;
}

function notify(error) {
  console.log(error);
  const alertError = document.querySelector("#notification");
  const alertTitle = document.querySelector("#descripition");
  alertError.style.display = "block";
  alertTitle.innerText = error;
}

let error = "";

function validForm(e) {
  e.preventDefault();

  if (
    nameUser.value == "" ||
    nameUser.value == null ||
    nameUser.value.length < 10 ||
    nameUser.value.length > 40
  ) {
    error = "Erro no campo nome: invalido";
    return notify(error);
  } else if (
    email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1 ||
    email.value == "" ||
    email.value == null ||
    email.value.length < 10 ||
    email.value.length > 50
  ) {
    return alert("E-mail invalidos");
  } else if (description.value.length < 10 || description.value.length > 500) {
    error = "Carteres invalidos";
    return notify(error);
  }

  const verifay = verifyRadio();

  if (verifay == null) {
    error = "Atenção preencha o melhor destino da viagem";
    return notify(error);
  }

  createUser.push({
    name: nameUser.value,
    email: email.value,
    description: description.value,
    typeViagem: verifyRadio(),
  });
}

btnSubmit.addEventListener("click", validForm);

function dropdawn(p) {
  const valueP = document.getElementsByClassName("dropDown")[0];
  const array = ["block", "none"];

  valueP.style.display = array[p];
}
