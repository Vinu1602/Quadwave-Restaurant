function clearErrors() {

    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }


}
function seterror(id, error) {
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}


function containsNumbers(str) {
    return /[0-9]/.test(str);
}

function validateForm() {
    var returnval = false;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (containsNumbers(name)) {
        seterror("name", "*Name should only have alphabets");
        returnval = false;
    }

    if (name.length == 0) {
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length > 15) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10) {
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6) {
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password) {
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}

function checkOrderForm() {
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['orderForm']["oname"].value;
    if (name.length < 5) {
        seterror("oname", "*Length of name is too short");
        returnval = false;
    }

    if (containsNumbers(name)) {
        seterror("oname", "*Name should only have alphabets");
        returnval = false;
    }

    var phone = document.forms['orderForm']["ophone"].value;
    if (phone.length != 10) {
        seterror("ophone", "*Phone number should be of 10 digits!");
        returnval = false;
    }
    return returnval;
}


function passcheck1() {
    var ele = document.getElementById('rcform');
    ele.classList.remove('inputdanger');
    ele.classList.add('inputprimary');
}

function passcheck2() {

    var b = document.getElementById('rcform');
    var a = document.getElementById('rform');

    if (a.value == b.value) {
        b.classList.remove('inputprimary');
        b.classList.add('inputsuccess');
    }
    else{
        b.classList.remove('inputsuccess');
        b.classList.add('inputprimary');
    }
}