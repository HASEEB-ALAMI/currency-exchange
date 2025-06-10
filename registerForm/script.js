const form = document.getElementById('form');
const username = document.getElementById('username');
const useremail = document.getElementById('useremail');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

//show eror and succes
function eror(input, txt){
    const pelem = input.parentElement;
    pelem.className = 'inForm eror';
    const small = pelem.querySelector('small');
    small.innerText = txt;
}
function succes(input){
    const pelem = input.parentElement;
    pelem.className = 'inForm success';
}
// check require
function checkrequired(inputarray){
    inputarray.forEach(function(input){
        if(input.value.trim() === ''){
            eror(input, `${input.id} is required`);
        }else{
            succes(input);
        }
    });

}
function ismatch(input1, input2){
    if(input1.value !== input2.value){
        eror(input2, `${input1.id} is not match with ${input2.id}`);
    }else{
        succes(input1);
        succes(input2);
    }
}
// is valid
function isValid(input){
     if(input.value.includes('@') && input.value.includes('.com')){
         succes(input);
    }else{
        eror(input, `${input.id} is not valid`);
    }
}
//event listeners
form.addEventListener('submit', function(target){
    target.preventDefault();
    checkrequired([username, useremail, password1, password2]);
    ismatch(password1, password2);
    isValid(useremail);
});