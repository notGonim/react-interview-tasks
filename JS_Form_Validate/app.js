

const firstName = document.getElementById('first_name')
const lastName = document.getElementById('last_name')
const companyName = document.getElementById('company_name')
const phone = document.getElementById('phone_number')
const email = document.getElementById('email')
const btn = document.getElementById('btn')
const person = document.getElementById('person')
const company = document.getElementById('company')

btn.disabled = true


person.addEventListener('change', () => {
    companyName.disabled = true
    phone.disabled = true
    btn.disabled = false
    firstName.disabled = false
    lastName.disabled = false
    email.disabled = false

})
company.addEventListener('change', () => {
    companyName.disabled = false
    phone.disabled = false
    btn.disabled = false
    firstName.disabled = true
    lastName.disabled = true
    email.disabled = true
})

btn.addEventListener('click', (e) => {
    const personChecked = document.getElementById('person').checked
    const companyChecked = document.getElementById('company').checked
    checkInput(personChecked, companyChecked)
})


const checkInput = (person, company) => {
    const firstNameVal = firstName.value.trim()
    const lastNameVal = lastName.value.trim()
    const companyVal = companyName.value.trim()
    const emailVal = email.value.trim()
    const phoneVal = phone.value.trim()
    if (person) {
        companyName.disabled = true
        if (firstNameVal == "") {
            setErrorFor(firstName)
        } else {
            setSucessFor(firstName)
        }
        if (lastNameVal == "") {
            setErrorFor(lastName)
        } else {
            setSucessFor(lastName)
        }

        if (emailVal != "" && ValidateEmail(emailVal)) {
            setSucessFor(email)
        } else {
            setErrorFor(email)
        }
    } else if (company) {
        if (companyVal == "") {
            setErrorFor(companyName)
        } else {
            setSucessFor(companyName)
        }
        if (phoneVal != "" && phonenumber(phoneVal)) {
            setSucessFor(phone)
        } else {
            setErrorFor(phone)
        }
    }
}



const setErrorFor = (input) => {
    input.style.borderColor = 'red'
}
const setSucessFor = (input) => {
    input.style.borderColor = 'green'
}




function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    return (false)
}



function phonenumber(phone) {
    console.log(phone)
    var re = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{3}$/;
    console.log(re.test(phone))
    return re.test(phone);
}
