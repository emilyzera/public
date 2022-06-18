const mymodal = new bootstrap.modal("#register-modal");
let logged =sessionStorage.getItem("logged");
const session =localStorage.getItem("session");

checklogged();

//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submite",function (e) {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-check").checked;

    const account = getaccount(email);

    if(!account) {
        alert("opps! verifique o usuario ou a senha.")
        return;

    }

    if(account) {
        if(account.password !== password){
            alert("opps! verifique o usuario ou a senha.")
            return;
    
        }
        savesession(email,checkSession);
        
        window.location.href = "home.html";
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

    if(password.length < 4){
        alert("preencha a senha com no minimo 4 digitos")
        return;
    }
    saveaccount({
        login: email,
        password: password,
        transactions: []

    });

    mymodal.hide();


    alert("conta criada com sucesso.")

});

function checklogged() {
    if(session){
        sessionStorage.getItem("looged", session);
        logged = session;
    }

    if(!logged){
        savesession(logged, session);
        window.location.href = "home.html";
    }
}

function saveaccount(data){
    localStorage.setItem(data.login,JSON.stringify(data));

}

function savesession(data, savesession) {
    if(savesession){
        localStorage.setItem("session",data);
    }
}

    sessionStorage.setItem(logged, data);
    


function getaccount(key){
    const account = localStorage.getItem(key);

    if(account){
        return JSON.parse(account);
    }

    return "";

}

