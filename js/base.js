const nome ="emily wust";
let nome2="";

let pessoadefault = {
nome: "emily wust",
idade:"20",
trabalho:"programador"
}


let nomes = ["emily wust", "maria silva", "pedro silva"];

let pessoaslistavazia =[] ;

let pessoas = [ 
    {
        nome: "emily wust",
        idade:"20",
        trabalho:"programador"
    },

    {
        nome: "maria silva",
        idade:"25",
        trabalho:"UX/UI designer",
    }
];

function alterarnome() {
nome2="maria silva"
console.log("valor alterado:");
 console.log(nome2);
}

function recebeEalteraNome(novoNome) {
   nome2= novonome;
   console.log("valor alterado recebendo um nome :");
   console.log(nome2);

}

function imprimirpessoa(pessoa) {
    
    console.log("nome:");
    console.log(pessoa.nome)
    
    console.log("idade:");
    console.log(pessoa.idade)
    
    console.log("trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarpessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirpessoa(){
    console.log("-------IMPRIMIR PESSOAS-------");
    pessoas.forEach((item)=> {
        console.log("nome:")
        console.log(item.nome);

         
    console.log("idade:");
    console.log(item.idade)
    
    console.log("trabalho:");
    console.log(item.trabalho);
    console.log(item);
    })
}

imprimirpessoa();


adicionarpessoa( {
    nome: "pedro silva",
    idade: "28",
    trabalho:"porteiro"
});


imprimirpessoa();

//imprimirpessoa(pessoadefault);

//imprimirpessoa({
//nome: "maria silva"
//idade:"25",
//trabalho:"UX/UI designer"
//})



//recebeealteranome("joão silva pereira");
//recebeealteranome("maria silva");

//alterarnome();

