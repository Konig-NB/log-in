let Login = document.getElementById("butt1");
let Register = document.getElementById("butt2");
let form1 = document.getElementById("con");
let form2 = document.getElementById("con2");
let Register2 = document.getElementById("high");
let Login2 = document.getElementById("high2");
let LoginB = document.getElementById("Loginbutton");
let email = document.getElementById("email");
let pass = document.getElementById("pass");

Register.onclick = function(){
    form2.style.display = "block";
    form1.style.display = "none";
}

Login.onclick = function(){
    form1.style.display = "block";
    form2.style.display = "none";
}

Register2.onclick = function(){
    form2.style.display = "block";
    form1.style.display = "none";
}

Login2.onclick = function(){
    form2.style.display = "none";
    form1.style.display = "block";
}

LoginB.onclick = function(){
    if (email.value == "" || pass.value == ""){
        email.focus();
        email.style.border = "solid 2px red";
        pass.focus();
        pass.style.border = "solid 2px red";
        return false;
    }

    if (email.value.length = 1 && email.value.length < 5 || pass.value.length >= 1 && pass.value.length < 5){
        alert("Please enter atleast five characters");
        email.focus();
        email.style.border = "solid 2px red";
        pass.focus();
        pass.style.border = "solid 2px red";
        return false;
    }

}