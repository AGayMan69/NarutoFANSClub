// create a constant to store the value for the information section
const Name = document.querySelector('#i1')
const Number = document.querySelector('#i2')
const Address = document.querySelector('#i3')
const Email = document.querySelector('#i4')

const form = document.querySelector('.ramen-form')
// number.addEventListener('blur', (e) => {
//     // if the form of contact number didn't type anything and
//     //didn't match the length of number equal to 8
//     // it will generate an error message under the box of contact name
//     let messagesNo = []
//     if (number.value.length > 0) {
//         if (number.value.length < 8 || number.value.length > 8) {
//             messagesNo.push('*Contact Number is invalid')
//         }
//     }
//     //if user reinput the information, it will clear the error message
//     if (number.value != null) {
//         messagesNo.push('')
//     }
//     if (number.value === '' || number.value == null) {
//         messagesNo.push('*Contact Number cannot be blank')
//     }
//
//     if (messagesNo.length > 0) {
//         errorNo.innerText = messagesNo.join(' ')
//     }
// })

Name.addEventListener('blur', validate)
Number.addEventListener('blur', validate)
Address.addEventListener('blur', validate)
Email.addEventListener('blur', validate)


form.addEventListener('submit', submitform)

function submitform(e) {
    e.preventDefault()
    const ramens = document.querySelectorAll('.ramen')
    let order = false
    ramens.forEach(ramen => {
        if (ramen.checked) {
            order = true
        }
    })

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

function validateSubmit(field) {
    let errormessage = checkNull(field)
    if (errormessage === '') {
        errormessage = checkFormat(field)
    }
    const errorMessage = document.querySelector(`.error[data-type="${field.dataset.type}"]`)

    errorMessage.innerHTML = errormessage
    return (errormessage === '')
}

function validate() {

    let errormessage = checkNull(this)
    if (errormessage === '') {
        errormessage = checkFormat(this)
    }
    const errorMessage = document.querySelector(`.error[data-type="${this.dataset.type}"]`)

    errorMessage.innerHTML = errormessage

}

function checkNull(input) {
    let message = ''
    let type = input.dataset.type
    if (input.value === '' || input.value == null) {
        message = `*${type} cannnot be blank`
    }

    return message;
}

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


let orderList = []

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('click', updateCart)
})

function updateCart() {
    if (this.checked) {

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

function caculateTotal() {
    const total = document.querySelector('.total-money')
    const calCost = orderList.reduce((total, item) => {
        return total + parseInt(item.price)
    }, 0)
    total.innerHTML = `Total:  $${calCost}`
}
