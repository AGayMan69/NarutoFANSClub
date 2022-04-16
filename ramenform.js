const name=document.querySelector('#i1')
const number=document.querySelector('#i2')
const address=document.querySelector('#i3')
const email=document.querySelector('#i4')
const form=document.querySelector('.ramen-form')
const errorName=document.querySelector('.error-name')
const errorNo=document.querySelector('.error-number')
const errorAddress=document.querySelector('.error-address')
const errorEmail=document.querySelector('.error-email')


form.addEventListener('submit', (s) =>{
    let messagesName= []
    if(name.value === '' || name.value == null) {
        messagesName.push('*Contact Name is required')
    }
    if (messagesName.length >0){
        s.preventDefault()
        errorName.innerText = messagesName.join(', ')
    }

    let messagesNo = []
    if((number.value.length <8 || number.value.length >8 )&& number.value.length >0){
        messagesNo.push('*Contact Number is invalid')
    }
    if(number.value === '' || number.value == null) {
        messagesNo.push('*Contact Number is required')
    }
    if (messagesNo.length >0){
        s.preventDefault()
        errorNo.innerText = messagesNo.join(', ')
    }

    let messagesAdd= []
    if(name.value === '' || name.value == null) {
        messagesAdd.push('*Address is required')
    }
    if (messagesAdd.length >0){
        s.preventDefault()
        errorAddress.innerText = messagesAdd.join(', ')
    }

    let messagesEmail=[]

    if(email.value === '' || name.value == null) {
        messagesEmail.push('*Email is required')
    }

    if (email.includes("@") === false){
        messagesEmail.push('*E-mail is invalid')
    }
    if (messagesEmail.length >0){
        s.preventDefault()
        errorEmail.innerText = messagesEmail.join(', ')
    }



})