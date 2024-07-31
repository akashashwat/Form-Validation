const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const roleError = document.getElementById('role-error');

function validateName(nameField) {
    var reg = /^[a-zA-Z ]+$/;
    if (!reg.test(nameField.value.trim())) {
        nameError.style.visibility = 'visible';
        return false;
    }
    nameError.style.visibility = 'hidden';
    return true;
}

function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!reg.test(emailField.value.trim())) {
        emailError.style.visibility = 'visible';
        return false;
    }
    emailError.style.visibility = 'hidden';
    return true;
}

function validatePhone(phoneField) {
    var reg = /^[0-9]{10}$/;
    if (!reg.test(phoneField.value.trim())) {
        phoneError.style.visibility = 'visible';
        return false;
    }
    phoneError.style.visibility = 'hidden';
    return true;
}

function validateRole(roleField) {
    if (!roleField.value.trim()) {
        roleError.style.visibility = 'visible';
        return false;
    }
    roleError.style.visibility = 'hidden';
    return true;
}

function showForm() {
    document.getElementById('magicForm').classList.add('fadeIn');
    document.getElementById('magicVector').style.display = 'none';
}

function successForm() {
    document.getElementById('formWrapper').style.display = 'none';
    document.getElementById('successContainer').style.display = 'block';
}


function handleFakeLoad() {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');
    const roleField = document.getElementById('role');

    const isNameValid = validateName(nameField);
    const isEmailValid = validateEmail(emailField);
    const isPhoneValid = validatePhone(phoneField);
    const isRoleValid = validateRole(roleField);

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isRoleValid) {
        return;
    }

    submitBtn.innerHTML = 'Please Wait';
    submitBtn.style.opacity = '0.5';

    setTimeout(() => {
        submitForm();

        submitBtn.innerHTML = 'Submit';
        submitBtn.style.opacity = '1';
    }, 1200);
}

function submitForm() {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');
    const roleField = document.getElementById('role');

    const formData = document.getElementById('formData');
    const newEntry = document.createElement('tr');
    newEntry.innerHTML = `
        <td>${nameField.value}</td>
        <td>${emailField.value}</td>
        <td>${phoneField.value}</td>
        <td>${roleField.value}</td>
    `;
    formData.appendChild(newEntry);

    document.getElementById('registration-form').reset();
    document.getElementById('formEntries').style.display = 'block';

    successForm();
}


function backToForm() {
    document.getElementById('formWrapper').style.display = 'block';
    document.getElementById('successContainer').style.display = 'none';
}
