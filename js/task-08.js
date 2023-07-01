const formElement = document.querySelector('.login-form');

formElement.addEventListener('submit', validateForm);

const customer = {};

function validateForm(event) {
event.preventDefault();

const {email, password} = event.currentTarget.elements;
if (email.value === "" || password.value === "") {
    alert("All fields must be filled!")
} else {
customer.email = email.value;
customer.password = password.value;
console.log(customer);
formElement.reset()
}
}







