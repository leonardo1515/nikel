const myModal = new bootstrap.Modal ("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = {
    transactions: []

};

document.getElementById("button-logout").addEventListener("click", logout);

//ADICIONAR LANÇAMENTOS
document.getElementById("trasaction-form").addEventListener("submit", function(e){
    e.preventDefault();

const value = parseFloat(document.getElementById("value-input").value);
const descripit = document.getElementById("descripition-input").value;
const date = document.getElementById("date-input").value;
const type = document.querySelector('input[name="tipy-input"]:checked').value;

data.transactions.unshift({
    value: value, type: type,  descripit: descripit, date: date
  });

  saveData(data);
  e.target.reset();
  myModal.hide();

  getTransactions();

  alert("Lançamento adicionado com sucesso");

});

checklogged();

function checklogged() {
    if(session){
        sessionStorage.setItem("logged",session);

        logged = session;
    }

    if(!logged){
        window.location.href = "index.html";
        return;
    }

    const dataUser = localStorage.getItem(logged);
    if(dataUser) {
        data =JSON.parse(dataUser);
    }

    getTransactions();

}

function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href = "index.html";
}

function getTransactions() {
    const transactions = data.transactions;
    let transactionsHtml = ``;

    if(transactions.length) {
        transactions.forEach((item) =>{
            let type = "Entrada";

            if(item.type === "2") {
                type = "Saida";
            }

            transactionsHtml += `
                 <tr>
                    <th scope="row">${item.date}</th>
                    <td>${item.value.toFixed(2)}</td>
                    <td>${type}</td>
                    <td>${item.descripit}</td>
                </tr>
            
            `
        })
    }

    document.getElementById("transactions-list").innerHTML =transactionsHtml;

}

function saveData(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}