const calcularValorPedido = require("./calcular-valor-pedidos");

it("não deve cobrar o valor de frente quando valor dos produtos for superior a 500 ", () =>{
    const meuPedido = {
        itens:[
            { nome: "Arco encantado", valor: 2000},
            {nome: "Entrega", valor: 100, entrega: true}
        ]
    }

   const resultado = calcularValorPedido(meuPedido)

   expect(resultado).toBe(2000)
})

it("deve cobrar valor de frete quando o valor dos produtos for menor que 500", () => {

    const meuPedido = { itens:[
        { nome: "Sanduíche", valor: 50},
        {nome: "Entrega", valor: 100, entrega: true}
    ]
};

const resultado = calcularValorPedido(meuPedido);

expect(resultado).toBe(150);

});

it("deve cobrar valor de frete caso o valor do produto seja Exatamente 500", () => {

    const meuPedido = { itens:[
        { nome: "Sanduíche caro", valor: 500},
        {nome: "Entrega", valor: 100, entrega: true}
    ]
};

const resultado = calcularValorPedido(meuPedido);

expect(resultado).toBe(600);

});

it("deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS", () => {
 const pedidoComEstadoRS ={
    estado:"RS",
    itens: [
        {nome:"Sanduíche bem caro", valor:500},
        {nome: "Entrega", valor: 100, entrega: true}
    ]
 };

    const resultado = calcularValorPedido(pedidoComEstadoRS);

    expect(resultado).toBe(620)

});

it("deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SC", () => {
    const pedidoComEstadoSC ={
       estado:"SC",
       itens: [
           {nome:"Sanduíche bem caro", valor:500},
           {nome: "Entrega", valor: 100, entrega: true}
       ]
    };
   
       const resultado = calcularValorPedido(pedidoComEstadoSC);
   
       expect(resultado).toBe(620)
   
   });

   it("não deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SP", () => {
    const pedidoComEstadoSP ={
       estado:"SP",
       itens: [
           {nome:"Sanduíche bem caro", valor:500},
           {nome: "Entrega", valor: 100, entrega: true}
       ]
    };
   
       const resultado = calcularValorPedido(pedidoComEstadoSP);
   
       expect(resultado).toBe(600)
   
   });