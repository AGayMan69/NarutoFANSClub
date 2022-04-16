// create a constant to store the value
const name=document.querySelector('#i1')
const number=document.querySelector('#i2')
const address=document.querySelector('#i3')
const email=document.querySelector('#i4')
const form=document.querySelector('.ramen-form')
const errorName=document.querySelector('.error-name')
const errorNo=document.querySelector('.error-number')
const errorAddress=document.querySelector('.error-address')
const errorEmail=document.querySelector('.error-email')
//re is the regex to check it have not "@"
const re= /.+[^@].+/;



//add evenlistener to check the submit button
form.addEventListener('submit', (s) => {
    // if  the form of contact name didn't type anything
    // it will generate an error message under the box of contact name
    let messagesName = []
    if (name.value === '' || name.value == null) {
        messagesName.push('*Contact Name cannot be blank')
    }
    //if user reinput the information, it will clear the error message
    if(name.value != null){
        messagesName.push('')
    }
    if (messagesName.length > 0) {
        s.preventDefault()
        errorName.innerText = messagesName.join(' ')
    }

    // if the form of contact number didn't type anything and
    //didn't match the length of number equal to 8
    // it will generate an error message under the box of contact name
    let messagesNo = []
    if (number.value.length > 0) {
    if (number.value.length < 8 || number.value.length > 8) {
        messagesNo.push('*Contact Number is invalid')
    }
    }
    //if user reinput the information, it will clear the error message
    if(number.value != null){
        messagesNo.push('')
    }
    if(number.value === '' || number.value == null) {
        messagesNo.push('*Contact Number cannot be blank')
    }

    if (messagesNo.length >0){
        s.preventDefault()
        errorNo.innerText = messagesNo.join(' ')
    }
    // if the form of address didn't type anything
    // it will generate an error message under the box of address

    let messagesAdd= []
    if(address.value === '' || address.value == null) {
        messagesAdd.push('*Address cannot be blank')
    }
    //if user reinput the information, it will clear the error message
    if(address.value != null){
        messagesAdd.push('')
    }
    if (messagesAdd.length >0){
        s.preventDefault()
        errorAddress.innerText = messagesAdd.join(' ')
    }
    // if the form of address didn't type anything and
    // didn't input the element of @
    // it will generate an error message under the box of address
    let messagesEmail=[]
    if(email.value === '' || email.value == null) {
        messagesEmail.push('*Email cannot be blank')
    }
    //if user reinput the information, it will clear the error message
    if(email.value != null){
        messagesEmail.push('')
    }
    const ok=re.exec(email.value)
    if(!ok){
        messagesEmail.push('Email is invalid')
    }
    if (messagesEmail.length >0){
        s.preventDefault()
        errorEmail.innerText = messagesEmail.join(' ')
    }
    console.log(ok)



})