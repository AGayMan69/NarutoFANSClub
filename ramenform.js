// create a constant to store the value
const name = document.querySelector('#i1')
const number = document.querySelector('#i2')
const address = document.querySelector('#i3')
const email = document.querySelector('#i4')
const form = document.querySelector('.ramen-form')
const errorName = document.querySelector('.error-name')
const errorNo = document.querySelector('.error-number')
const errorAddress = document.querySelector('.error-address')
const errorEmail = document.querySelector('.error-email')
//re is the regex to check it have not "@"
const re = /.+[@].+/;


//add evenlistener to check the information when the user click submit button
form.addEventListener('submit', (s) => {
    // if  the form of contact name didn't type anything
    // it will generate an error message under the box of contact name
    let messagesName = []
    if (name.value === '' || name.value == null) {
        messagesName.push('*Contact Name cannot be blank')
    }
    //if user reinput the information, it will clear the error message
    if (name.value != null) {
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
    if (number.value != null) {
        messagesNo.push('')
    }
    if (number.value === '' || number.value == null) {
        messagesNo.push('*Contact Number cannot be blank')
    }

    if (messagesNo.length > 0) {
        s.preventDefault()
        errorNo.innerText = messagesNo.join(' ')
    }
    // if the form of address didn't type anything
    // it will generate an error message under the box of address
    let messagesAdd = []
    if (address.value === '' || address.value == null) {
        messagesAdd.push('*Address cannot be blank')
    }
    //if user reinput the information, it will clear the error message
    if (address.value != null) {
        messagesAdd.push('')
    }
    if (messagesAdd.length > 0) {
        s.preventDefault()
        errorAddress.innerText = messagesAdd.join(' ')
    }
    // if the form of email didn't type anything and
    // didn't input the element of @
    // it will generate an error message under the box of address
    let messagesEmail = []
    if (email.value === '' || email.value == null) {
        messagesEmail.push('*Email cannot be blank')
    }
    //if user reinput the information, it will clear the error message
    if (email.value != null) {
        messagesEmail.push('')
    }
    //check email format xxx@xxx
    const ok = re.exec(email.value)
    if (!ok) {
        messagesEmail.push('Email is invalid')
    }
    if (messagesEmail.length > 0) {
        s.preventDefault()
        errorEmail.innerText = messagesEmail.join(' ')
    }
})

//onblur to check the input information
name.addEventListener('blur', (e) => {
    // if  the form of contact name didn't type anything
    // it will generate an error message under the box of contact name
    let messagesName = []
    if (name.value === '' || name.value == null) {
        messagesName.push('*Contact Name cannot be blank')
    }
    //if user reinput the information, it will clear the error message
    if (name.value != null) {
        messagesName.push('')
    }
    if (messagesName.length > 0) {
        e.preventDefault()
        errorName.innerText = messagesName.join(' ')
    }

})

number.addEventListener('blur', (e) => {
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
    if (number.value != null) {
        messagesNo.push('')
    }
    if (number.value === '' || number.value == null) {
        messagesNo.push('*Contact Number cannot be blank')
    }

    if (messagesNo.length > 0) {
        e.preventDefault()
        errorNo.innerText = messagesNo.join(' ')
    }
})

address.addEventListener('blur', (e) => {
    // if the form of address didn't type anything
    // it will generate an error message under the box of address
    let messagesAdd = []
    if (address.value === '' || address.value == null) {
        messagesAdd.push('*Address cannot be blank')
    }
    //if user reinput the information, it will clear the error message
    if (address.value != null) {
        messagesAdd.push('')
    }
    if (messagesAdd.length > 0) {
        e.preventDefault()
        errorAddress.innerText = messagesAdd.join(' ')
    }
})

email.addEventListener('blur', (e) => {
    // if the form of email didn't type anything and
    // didn't input the element of @
    // it will generate an error message under the box of address
    let messagesEmail = []
    if (email.value === '' || email.value == null) {
        messagesEmail.push('*Email cannot be blank')
    }
    //if user reinput the information, it will clear the error message
    if (email.value != null) {
        messagesEmail.push('')
    }
    //check email format xxx@xxx
    const ok = re.exec(email.value)
    if (!ok) {
        messagesEmail.push('Email is invalid')
    }
    if (messagesEmail.length > 0) {
        e.preventDefault()
        errorEmail.innerText = messagesEmail.join(' ')
    }
})

let orderList = []

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('click', updateCart)
})

function updateCart() {
    if (this.checked) {
        console.log('adding')
        const item = {
            name: `${this.dataset.name}`,
            price: `${this.dataset.price}`
        }
        orderList.push(item)
    } else {
        orderList = orderList.filter(item => {
            return item.name !== `${this.dataset.name}`;
        })
    }
    renderList()
    caculateTotal()
}

function renderList() {
    console.log('rendering list')
    console.log(orderList)
    const orderListHTML = orderList.map(item => {
        return `
            <li>
                <span class="item_name">${item.name}</span>
                <span class="item_subtotal">\$${item.price}</span>
            </li>
        `
    }).join('')

    const cartList = document.querySelector('ul.order')
    console.log(cartList)
    cartList.innerHTML = orderListHTML
}

function caculateTotal() {
    const total = document.querySelector('.total-money')
    const calCost = orderList.reduce((total, item) => {
        return total + parseInt(item.price)
    }, 0)
    total.innerHTML = `Total $HKD: ${calCost}`
}
