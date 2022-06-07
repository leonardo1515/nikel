const myModal = new bootstrap.Modal ("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checklogged();

//LOGAR NO CISTEMA
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const senha = document.getElementById("password-input").value;
    const session = document.getElementById("session-check").checked;
     
    const account = getAccount(email);

    if(!account) {
        alert("Opss! Verifique o usuario ou a senha.");
        return;
    }

    if(account) {
        if(account.senha !== senha) {
            alert("Opss! Verifique o usuario ou a senha.");
            return; 
        }

        saveSession(email, session);


          window.location.href = "home.html";
    }
    
   
});

//CRIARCONTA

document.getElementById("creat-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-creait-imput").value;
    const senha = document.getElementById("password1-creat-imput").value; 
    
    if(email.length < 5){
        alert("Preenha o campo com um e-mail valido");
        return;
    }

    if(senha.length < 4) {
        alert("Preencha a senha com no minimo 4 digitos");
        return;
    }

    saveAccount({
        login: email,
        senha: senha,
        transactions: []
    });

    myModal.hide();

    alert("conta criada com sicesso");

});

function checklogged() {
    if(session){
        sessionStorage.setItem("logged",session);

        logged = session;
    }

    if(logged){
        saveSession(logged,session);

        window.location.href = "home.html";
    }
}

function saveSession(data,saveSession){
    if(saveSession) {
        localStorage.setItem("session",data);
    }

    sessionStorage.setItem("logged",data);
}

function saveAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data));
};

function getAccount(key) {
    const account = localStorage.getItem(key);
    
    if(account) {
        return JSON.parse(account);
    }

    return "";
}
