//Validação Login e Senha

  const form = document.getElementById("form");
  const username = document.getElementById("username");
  const cpf = document.getElementById("cpf");
  const dataNascimento = document.getElementById("dataNascimento");
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
    const usernameValue = username.value;
    const cpfValue = cpf.value;
    const dataNascimentoValue = dataNascimento.value;
    const telefoneValue = telefone.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

      if (usernameValue === "") {
        setErrorFor(username, "Dev o preenchimento desse campo é obrigatório.");
      } else if (usernameValue.length < 6) {
        setErrorFor(username, "Dev seu nome completo precisa ter no mínimo 6 caracteres."); 
      } else {
        setSuccessFor(username);
      }

      if (cpfValue === "") {
        setErrorFor(cpf, "Dev faltou o preenchimento do seu CPF.");
      } else {
        setSuccessFor(cpf);
      }
    
      if (dataNascimentoValue === "") {
        setErrorFor(dataNascimento, "Dev o seu aniversário é muito importante para nós.");
      } else {
        setSuccessFor(dataNascimento);
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
    