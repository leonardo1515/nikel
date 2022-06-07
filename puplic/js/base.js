
let nome2=""


let pessoa = {
    nome: "eduardo",
    idade: "25",
    ocupação: "corretor"
}

let nomes =["camila","Cicera","eduardo", "eu"];

let pessoas = [
    {
    nome: "leonardo",
    idade: "23",
    ocupação: "softewr-engener"
    },
    {
    nome: "camila",
    idade: "29",
    ocupação: "programadora"
    }
]
    
 

function alterar() {
    nome2 ="Maria silva"

    console.log("valor alterado")
    console.log(nome2)
}




function recebeealtera(novoNome){
    nome2 = novoNome;
    console.log("valor alterado pois recebeu");
    console.log(nome2);
}


function adicionarPessoa (pessoa) {
    pessoas.push(pessoa);

}

adicionarPessoa({
    nome: "eduardo",
    idade: "25",
    ocupação: "corretor"
});

//console.log(pessoas);



//console.log(pessoas);

// console.log(pessoa);
// console.log(pessoa.nome);



//recebeealtera("joão pereira") ;
//recebeealtera("Maria sil")
//alterar() ;

