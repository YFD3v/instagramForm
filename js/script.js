const button = document.querySelector('.btn__criarConta');

//Input validation


const form = document.querySelector('.form');
const email = document.querySelector('.email');
const password = document.querySelector('.password');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})


function checkInputs () {
    const emailValue = email.value;
    const passwordValue = password.value;


    if(emailValue === ''){
        setErrorFor(email);

    }else if(!checkEmail(emailValue)){
        setErrorFor(email);

    }else{
        setSucessFor(email)
        
    }

    if(passwordValue === ''){
        setErrorFor(password);

    }else if(passwordValue.length < 8){
        setErrorFor(password);

    }else{
        setSucessFor(password);
       
    }
    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
      return formControl.className === "form-control success";
    });
  
    if (formIsValid) {
      console.log("O formulário está 100% válido!");
    }
  }



function setErrorFor(input){

    const formControl = input.parentElement.parentElement;
    formControl.className = 'form-control error';

}

function setSucessFor(input){
    const formControl = input.parentElement.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
