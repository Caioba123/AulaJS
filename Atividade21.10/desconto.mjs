// 1 Questão
// const listaDeClientes = [
//     { nome: "João Silva", telefone: "(11) 98765-4321" },
//     { nome: "Maria Oliveira", telefone: "(21) 91234-5678" },
//     { nome: "Carlos Souza", telefone: "(31) 99876-5432" },
//     { nome: "Ana Costa", telefone: "(41) 93456-7890" },
//     { nome: "Lucas Pereira", telefone: "(61) 92345-6789" }
// ];

// console.log("Lista de Clientes:");
// listaDeClientes.forEach(cliente => {
//     console.log(`Nome: ${cliente.nome}, Telefone: ${cliente.telefone}`);
// });


// 2 Questão
function Desconto(a, b) {
   
    let c = a * b;
    let d = c * 0.09;
    let e = d * 0.02;
    let f = (c - (d + e));
    
    console.log(Math.round(c));
    console.log(Math.round(d));
    console.log(Math.round(e));
    console.log(Math.round(f));
}

export default Desconto;