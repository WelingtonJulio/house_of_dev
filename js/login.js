
  //Validação Login e Senha
  
  const form = document.getElementById("form");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  
  //n recarrega a pag
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    checkInputs();
  });
  
  function checkInputs() {
    const userLoginValue = userLogin.value;
    const passwordValue = password.value;
  
    if (userLoginValue === "") {
        setErrorFor(userLogin, "Dev o preenchimento desse campo é obrigatório.");
      } else if (userLoginValue.length < 6) {
        setErrorFor(userLogin, "Dev você precisa ter no mínimo 6 caracteres."); 
      } else {
        setSuccessFor(userLogin);
      }
  
      if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatória.");
      } else if (passwordValue.length < 6) {
        setErrorFor(password, "Dev a senha precisa ter no mínimo 6 caracteres.");
      } else {
        setSuccessFor(password);
      }

      const formControls = form.querySelectorAll(".form-control");
    
      const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
      });
    
      if (formIsValid) {
        console.log("O formulário está 100% válido!");
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
        
  //Cadeado
    const senhaInput = document.getElementById("password")
    const cadeado = document.getElementById("cadeado")

    function cadeadoClick() {
        let inputTypeIsPassword = senhaInput.type == "password"

        if (inputTypeIsPassword){
            showSenha()
        } else {
            hideSenha()
        }
    }

    function showSenha() {
        senhaInput.setAttribute("type", "text")
        cadeado.setAttribute("src", "/img/icon/cadeado-aberto.png")
    }

    function hideSenha(){
        senhaInput.setAttribute("type", "password")
        cadeado.setAttribute("src", "/img/icon/cadeado.png")
    }

    