
// Referente ao formulario do cadastreSE
const funcRegisterForm = (e) => {
const form = document.getElementById('form')
const username = document.getElementById('username')
const cpf = document.getElementById('cpf')
const dataNascimento = document.getElementById('dataNascimento')
const telefone = document.getElementById('telefone')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')
const controlForms = document.querySelectorAll('.form-control');


const components = [
    document.getElementById('username'),
    document.getElementById('cpf'),
    document.getElementById('dataNascimento'),
    document.getElementById('telefone'),
    document.getElementById('email'),
    document.getElementById('password'),
    document.getElementById('password-confirmation'),
]


function checkInputs() {
    const usernameValue = username.value
    const cpfValue = cpf.value
    const dataNascimentoValue = dataNascimento.value
    const telefoneValue = telefone.value
    const emailValue = email.value
    const passwordValue = password.value
    const passwordConfirmationValue = passwordConfirmation.value

    if (usernameValue === '') {
        setErrorFor(username, 'Dev o preenchimento desse campo é obrigatório.')
    } else if (usernameValue.length < 6) {
        setErrorFor(
            username,
            'Dev seu nome completo precisa ter no mínimo 6 caracteres.'
        )
    } else {
        setSuccessFor(username)
    }

    if (cpfValue === '') {
        setErrorFor(cpf, 'Dev faltou o preenchimento do seu CPF.')
    } else {
        setSuccessFor(cpf)
    }

    if (dataNascimentoValue === '') {
        setErrorFor(
            dataNascimento,
            'Dev o seu aniversário é muito importante para nós.'
        )
    } else {
        setSuccessFor(dataNascimento)
    }

    if (telefoneValue === '') {
        setErrorFor(telefone, 'Dev faltou o preenchimento do seu Contato.')
    } else {
        setSuccessFor(telefone)
    }

    if (emailValue === '') {
        setErrorFor(email, 'O email é obrigatório.')
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'Por favor, insira um email válido.')
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === '') {
        setErrorFor(password, 'A senha é obrigatória.')
    } else if (passwordValue.length < 6) {
        setErrorFor(
            password,
            'Mínimo de 6 caracteres entre símbolos, letras e números.'
        )
    } else {
        setSuccessFor(password)
    }

    if (passwordConfirmationValue === '') {
        setErrorFor(
            passwordConfirmation,
            'Ops! Dev sua confirmação de senha é obrigatória .'
        )
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, ' Dev as senhas não conferem.')
    } else {
        setSuccessFor(passwordConfirmation)
    }

    const formControls = form.querySelectorAll('.form-control')

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === 'form-control success'
    })

    if (formIsValid) {
        console.log('O formulário está válido!')
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    // Adiciona a mensagem de erro
    small.innerText = message

    // Adiciona a classe de erro
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement

    // Adicionar a classe de sucesso
    formControl.className = 'form-control success'
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    )
}

e.preventDefault()
checkInputs();

console.table([username.value, cpf.value, dataNascimento.value, telefone.value, email.value, password.value, passwordConfirmation.value])



components.forEach(component => component.value = "");
controlForms.forEach(form => form.classList.remove('success'));


return false;
}


const funcContactForm = (e) => {
    const components = [ 
        document.getElementById('username'), 
        document.getElementById('telefone'),
        document.getElementById('email'),
        document.getElementById('mensagem'),
        document.getElementById('assunto'),
        document.querySelector('input[name="tipo"]:checked')
    ]

    const check = {
        username (component) {
        if(component.value === "") return setErrorFor(component, 'Dev o preenchimento desse campo é obrigatório.');
        if(component.value < 6 ) return setErrorFor(component,'Dev seu nome completo precisa ter no mínimo 6 caracteres.');

        return setSuccessFor(username);
        },
        email (component) {
         if(component.value === "") return setErrorFor(component, 'O email é obrigatório.');
         if(!checkEmail(component.value)) return setErrorFor(component, 'Por favor, insira um email válido.');

         return setSuccessFor(component);
        },
        telefone (component) {
         if(component.value === "") return setErrorFor(component, 'Dev faltou o preenchimento do seu Contato.');
         return setSuccessFor(component);
        },
        mensagem (component) {
        if(component.value === "") return setErrorFor(component, 'Dev faltou o preenchimento do seu Mensagem.');
        return setSuccessFor(component);
        },
        assunto (component) {
        if(component.value === "") return setErrorFor(component, 'Dev faltou o preenchimento do seu Assunto.');
        return setSuccessFor(component);
        },
        tipo (component) {
        }
    }

    function checkInputs() {
        components.forEach((component) => {
            check[`${component.name}`](component);
        })

        const formControls = form.querySelectorAll('.form-control')

        const formIsValid = [...formControls].every((formControl) => {
            return formControl.className === 'form-control success'
        })

        if (formIsValid) {
            console.log('O formulário está válido!')
        }

    }
    
    function setErrorFor(input, message) {
        const formControl = input.parentElement
        const small = formControl.querySelector('small')
    
        // Adiciona a mensagem de erro
        small.innerText = message
    
        // Adiciona a classe de erro
        formControl.className = 'form-control error'
    }
    
    function setSuccessFor(input) {
        const formControl = input.parentElement
    
        // Adicionar a classe de sucesso
        formControl.className = 'form-control success'

    }
    
    function checkEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        )
    }


    e.preventDefault();
    checkInputs();
    return false;

}


const funcRegisterJuriForm = (e) => {
    const components = [ 
        document.getElementById('username'), 
        document.getElementById('telefone'),
        document.getElementById('email'),
        document.getElementById('mensagem'),
        document.getElementById('assunto'),
    ]

    const check = {
        username (component) {
        if(component.value === "") return setErrorFor(component, 'Dev o preenchimento desse campo é obrigatório.');
        if(component.value < 6 ) return setErrorFor(component,'Dev seu nome completo precisa ter no mínimo 6 caracteres.');

        return setSuccessFor(username);
        },
        email (component) {
         if(component.value === "") return setErrorFor(component, 'O email é obrigatório.');
         if(!checkEmail(component.value)) return setErrorFor(component, 'Por favor, insira um email válido.');

         return setSuccessFor(component);
        },
        telefone (component) {
         if(component.value === "") return setErrorFor(component, 'Dev faltou o preenchimento do seu Contato.');
         return setSuccessFor(component);
        },
        mensagem (component) {
        if(component.value === "") return setErrorFor(component, 'Dev faltou o preenchimento do seu Mensagem.');
        return setSuccessFor(component);
        },
        assunto (component) {
        if(component.value === "") return setErrorFor(component, 'Dev faltou o preenchimento do seu Assunto.');
        return setSuccessFor(component);
        },
        tipo (component) {
        }
    }


    function checkInputs() {
        components.forEach((component) => {
            check[`${component.name}`](component);
        })

        const formControls = form.querySelectorAll('.form-control')

        const formIsValid = [...formControls].every((formControl) => {
            return formControl.className === 'form-control success'
        })

        if (formIsValid) {
            console.log('O formulário está válido!')
        }

    }
    
    function setErrorFor(input, message) {
        const formControl = input.parentElement
        const small = formControl.querySelector('small')
    
        // Adiciona a mensagem de erro
        small.innerText = message
    
        // Adiciona a classe de erro
        formControl.className = 'form-control error'
    }
    
    function setSuccessFor(input) {
        const formControl = input.parentElement
    
        // Adicionar a classe de sucesso
        formControl.className = 'form-control success'

    }
    
    function checkEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        )
    }

    e.preventDefault();
    checkInputs()
    return false;
}

const funcLoginForm = (e) => {
    const form = document.getElementById("form");
    const controlForms = document.querySelectorAll('.form-control');

     //Validação Login e Senha
  
    const components = [
    document.getElementById("userLogin"), document.getElementById("password")
    ];

  
    const check = {
        userLogin: (component) => {
            if(component.value === "") return setErrorFor(component, "Dev o preenchimento desse campo é obrigatório.");
            if(component.value.length < 6) return setErrorFor(component, "Dev você precisa ter no mínimo 6 caracteres.");
            return setSuccessFor(userLogin);
        },
        password: (component) => {
            if(component.value === "") return setErrorFor(component, "A senha é obrigatória.");
            if(component.value.length < 6) return setErrorFor(component, "Dev a senha precisa ter no mínimo 6 caracteres.");

            return setSuccessFor(component);
        }
    }

    function checkInputs() {
        components.forEach((component) => {
            check[`${component.id}`](component);
        })

        const formControls = form.querySelectorAll('.form-control')

        const formIsValid = [...formControls].every((formControl) => {
            return formControl.className === 'form-control success'
        })

        if (formIsValid) {
            console.log('O formulário está válido!')
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
        
    e.preventDefault();
    checkInputs()
    

      
    console.table([components[0].value, components[1].value])
    components.forEach(component => component.value = "");


    return false;
}

//Cadeado
function handleChangePadLock () {
    const senhaInput = document.getElementById("password");
    const cadeado = document.getElementById("cadeado");
    const inputTypeIsPassword = senhaInput.type == "password";
    const showSenha = () => {
        senhaInput.setAttribute("type", "text")
        cadeado.setAttribute("src", "./public/assets/img/icon/cadeado-aberto.png")
    };
    const hideSenha = () => {
        senhaInput.setAttribute("type", "password")
        cadeado.setAttribute("src", "./public/assets/img/icon/cadeado.png")
    };

    if(senhaInput.value.length > 0) {
        return inputTypeIsPassword ? showSenha() : hideSenha();
    }
}



