const form = document.getElementById("form");
const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");

//n recarrega a pag

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nomeValue = nome.value;
  const sobrenomeValue = sobrenome.value;
  const emailValue = email.value;
  const telefoneValue = telefone.value;
  const assuntoValue = assunto.value;
  const mensagemValue = mensagem.value;

  if (nomeValue === "") {
    setErrorFor(nome, "Campo obrigatório.");
  } else if (nomeValue.length < 2) {
    setErrorFor(nome, "Precisa ter no mínimo 2 caracteres.");
  } else {
    setSuccessFor(nome);
  }

  if (sobrenomeValue === "") {
    setErrorFor(sobrenome, "Campo obrigatório.");
  } else if (sobrenomeValue.length < 2) {
    setErrorFor(sobrenome, "Precisa ter no mínimo 2 caracteres.");
  } else {
    setSuccessFor(sobrenome);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (telefoneValue === "") {
    setErrorFor(telefone, "Dev faltou o preenchimento do seu Contato.");
  } else if (!checkTelefone(telefoneValue)) {
    setErrorFor(email, "Por favor, insira um número válido.");
  } else {
    setSuccessFor(telefone);
  }

  if (assuntoValue === "") {
    setErrorFor(assunto, "O assunto é obrigatório.");
  } else if (assuntoValue.length < 6) {
    setErrorFor(assunto, "Digite o assunto.");
  } else {
    setSuccessFor(assunto);
  }

  // if (mensagemValue === "") {
  //   setErrorFor(mensagem, "A mensagem é obrigatória.");
  // } else if (mensagemValue.length < 6) {
  //   setErrorFor(mensagem, "Digite a mensagem.");
  // } else {
  //   setSuccessFor(mensagem);
  // }

  if (mensagemValue == "") {
    setErrorFor(mensagem, "A mensagem é obrigatória.");
    mensagemValue.focus();
  } else if (mensagemValue.length < 50) {
    setErrorFor(mensagem, "Digite a mensagem.");
    mensagemValue.focus();
  } else {
    setSuccessFor(mensagem);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está válido!");
    alert("enviado")
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function checkTelefone(telefone) {
  return /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(
    telefone
  );
}

