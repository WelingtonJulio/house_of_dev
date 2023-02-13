//Validação Login e Senha

const form = document.getElementById("form");
const nomeFantasia = document.getElementById("nomeFantasia");
const cnpj = document.getElementById("cnpj");
const razaoSocial = document.getElementById("razaoSocial");
const dataAbertura = document.getElementById("dataAbertura");
const incricaoEstadual = document.getElementById("incricaoEstadual");
const nomeResponsavel = document.getElementById("nomeResponsavel");
const telefone = document.getElementById("telefone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

//n recarrega a pag
    
form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    checkInputs();
});

function checkInputs() {
    const nomeFantasiaValue = nomeFantasia.value;
    const cnpjValue = cnpj.value;
    const razaoSocialValue = razaoSocial.value;
    const dataAberturaValue = dataAbertura.value;
    const incricaoEstadualValue = incricaoEstadual.value;
    const nomeResponsavelValue = nomeResponsavel.value;
    const telefoneValue = telefone.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (nomeFantasiaValue === "") {
        setErrorFor(nomeFantasia, "Dev o preenchimento desse campo é obrigatório.");
    } else if (nomeFantasiaValue.length < 6) {
        setErrorFor(nomeFantasia, "Dev esse campo precisa ter no mínimo 6 caracteres."); 
    } else {
        setSuccessFor(nomeFantasia);
    }
      
    if (cnpjValue === "") {
        setErrorFor(cnpj, "Dev faltou o preenchimento do CNPJ da sua empresa.");
    } else {
      setSuccessFor(cnpj);
    }

    if (razaoSocialValue === "") {
        setErrorFor(razaoSocial, "Dev o preenchimento desse campo é obrigatório.");
    } else if (razaoSocialValue.length < 9) {
      setErrorFor(razaoSocial, "Dev esse campo precisa ter no mínimo 9 caracteres."); 
    } else {
      setSuccessFor(razaoSocial);
    }

    if (dataAberturaValue === "") {
        setErrorFor(dataAbertura, "Dev essa data é muito importante para nós.");
    } else {
      setSuccessFor(dataAbertura);
    }

    if (incricaoEstadualValue === "") {
        setErrorFor(incricaoEstadual, "Dev faltou o preencher esse campo.");
    } else {
        setSuccessFor(incricaoEstadual);
    }
    
    if (nomeResponsavelValue === "") {
        setErrorFor(nomeResponsavel, "Dev o preenchimento desse campo é obrigatório.");
    } else if (nomeResponsavelValue.length < 6) {
        setErrorFor(nomeResponsavel, "A senha precisa ter no mínimo 6 caracteres entre símbolos, letras e números."); 
    } else {
        setSuccessFor(nomeResponsavel);
    }

    if (telefoneValue === "") {
        setErrorFor(telefone, "Dev faltou o preenchimento do seu Contato.");
    } else {
        setSuccessFor(telefone);
    }

    if (emailValue === "") {
      setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)) {
      setErrorFor(email, "Por favor, insira um email válido.");
    } else {
      setSuccessFor(email);
    }

    if (passwordValue === "") {
      setErrorFor(password, "A senha é obrigatória.");
    } else if (passwordValue.length < 6) {
      setErrorFor(password, "Dev sua senha precisa ter no mínimo 6 caracteres.");
    } else {
      setSuccessFor(password);
    }

    if (passwordConfirmationValue === "") {
      setErrorFor(passwordConfirmation, "Ops! Dev sua confirmação de senha é obrigatória .");
    } else if (passwordConfirmationValue !== passwordValue) {
      setErrorFor(passwordConfirmation, " Dev as senhas não conferem.");
    } else {
      setSuccessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
      return formControl.className === "form-control success";
    });

    if (formIsValid) {
      console.log("O formulário está válido!");
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
    
