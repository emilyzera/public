const mymodal = new bootstrap.Modal("#register-modal");
let logged =sessionStorage.getItem("logged");
const session =localStorage.getItem("session");

checklogged();

//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submit",function (e) {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-check").value;
    const checkSession = document.getElementById("session-check").checked;

    const account = getaccount(email);

    if(!account) {
        alert("opps! verifique o usuario ou a senha.")
        return;
    } else {
        if(account.password===password) {
            savesession(email, checkSession);
            window.location.href = "home.html";



        }
         alert("opps! verifique o usuario ou a senha.")
        return;

    }
});


//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();


    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;


    if(email.length < 5){
        alert("preencha o campo com um e-mail valido");
        return;

    }

    if (password.length < 4) {
        alert("preencha a senha com no minimo 4 digitos")
        return;
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []

    });

    mymodal.hide();
   alert("conta criada com sucesso.");

});

function checklogged() {
    if(session){
        sessionStorage.setItem("looged", session);
        logged = session;
    }

    if(logged){
        savesession(logged, session);
        window.location.href = "home.html";
    }
}

function saveAccount(data) {
    localStorage.setItem(data.login,JSON.stringify(data));

}

function savesession(data, savesession){
    if(savesession){
        localStorage.setItem("session",data);
    }
    sessionStorage.setItem("logged", data);
}

    
   

function getaccount(key){
    const account = localStorage.getItem(key);

    if(account){
        return JSON.parse(account);
    }

    return "";

}

