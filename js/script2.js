const userName = document.querySelector('.username');
const nome = document.querySelector('.nome');
const form2 = document.querySelector('.form2');
const email2 = document.querySelector('.email2');
const password2 = document.querySelector('.password2');


form2.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs2();
})


function checkInputs2 () {
    const email2Value = email2.value;
    const password2Value = password2.value;
    const userNameValue = userName.value;
    const nomeValue = nome.value; 
 
    if(email2Value === ''){
        setErrorFor(email2);

    }else if(!checkEmail(email2Value)){
        setErrorFor(email2);

    }else{
        setSucessFor(email2)
        
    }
    
    if (nomeValue === '') {
        setErrorFor(nome);
    }else{
        setSucessFor(nome);
    }
    if(userNameValue === '') {
        setErrorFor(userName)
    }else{
        setSucessFor(userName);
    }


    if(password2Value === ''){
        setErrorFor(password2);

    }else if(password2Value.length < 8){
        setErrorFor(password2);

    }else{
        setSucessFor(password2);
       
    }
    const formControls = form2.querySelectorAll(".form-control");

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
