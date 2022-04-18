// create a constant to select the value of the information section
const Name = document.querySelector('#i1')
const Number = document.querySelector('#i2')
const Address = document.querySelector('#i3')
const Email = document.querySelector('#i4')
//create a constant to select the value of the form
const form = document.querySelector('.ramen-form')

//use eventlistener to check the submit action
form.addEventListener('submit', submitform)

//the function to check the user have or have not selected ramen
//and input information
//if not then will show error message and alert
function submitform(e) {
    e.preventDefault()
    const ramens = document.querySelectorAll('.ramen')
    //check the user have or have not select 1 ramen
    let order = false
    ramens.forEach(ramen => {
        if (ramen.checked) {
            order = true
        }
    })
    //check the user have or havenot input information
    let inputfield = [Name, Number, Address, Email]
    let valid = true
    inputfield.forEach(field => {
        if (!validateSubmit(field)) {
            valid = false
        }
    })

    if (order && valid) {
        alert("Place Order Successful")
        form.reset()
        orderList = []
        updateCart()
        return true
    } else if (!order) {
        alert("Please at least select 1 ramen")
        return false
    } else {
        alert("Please input the information")
        return false
    }
}

//function of the validate for submmit conditon
function validateSubmit(field) {
    let errormessage = checkNull(field)
    if (errormessage === '') {
        errormessage = checkFormat(field)
    }
    const errorMessage = document.querySelector(`.error[data-type="${field.dataset.type}"]`)

    errorMessage.innerHTML = errormessage
    return (errormessage === '')
}

//use evenlistener to check different column of the information
//if the user have not input the information
//it will show error message after the user blur the column
Name.addEventListener('blur', validate)
Number.addEventListener('blur', validate)
Address.addEventListener('blur', validate)
Email.addEventListener('blur', validate)

//function to check the information is or is not validate
function validate() {

    let errormessage = checkNull(this)
    if (errormessage === '') {
        errormessage = checkFormat(this)
    }
    const errorMessage = document.querySelector(`.error[data-type="${this.dataset.type}"]`)

    errorMessage.innerHTML = errormessage

}

//function to check Null
//and return the error message
function checkNull(input) {
    let message = ''
    let type = input.dataset.type
    if (input.value === '' || input.value == null) {
        message = `*${type} cannnot be blank`
    }

    return message;
}

//function to check the format of information
//return error message
function checkFormat(input) {
    //reEmail is regex to check Email format
    //reNumber is regex to check tel Number format
    const reEmail = /.+[@].+[.].+/;
    const reNumber = /^\d{8,}$/;
    let message = ''
    if (input.dataset.type === "Contact Number") {
        const right = reNumber.exec(Number.value)
        if (!right) {
            message = `*${input.dataset.type} is invalid`
        }
    } else if (input.dataset.type === "Email") {
        const ok = reEmail.exec(Email.value)

        if (!ok) {
            message = `*${input.dataset.type} is invalid`
        }

    }
    return message;
}

// cart section
//create array for order list
let orderList = []
// select all the checkbox when it checked, it will use function of updateCart
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('click', updateCart)
})

//function to update the cart
function updateCart() {
    if (this.checked) {
        //get the name and price of different food
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

    const orderListHTML = orderList.map(item => {
        return `
            <li>
                <span class="item_name">${item.name}</span>
                <span class="item_subtotal">\$${item.price}</span>
            </li>
        `
    }).join('')

    const cartList = document.querySelector('ul.order')

    cartList.innerHTML = orderListHTML
}

//calculate the total of the selected food
function caculateTotal() {
    const total = document.querySelector('.total-money')
    const calCost = orderList.reduce((total, item) => {
        return total + parseInt(item.price)
    }, 0)
    total.innerHTML = `Total:  $${calCost}`
}
