
let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';   //Zerando os valores
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];                  //Quebrando o texto em partes
    let valorUnitario = produto.split('R$')[1]; 
    let quantidade = document.getElementById('quantidade').value; 


    //Calcular o preço, subtotal
    let preco = quantidade * valorUnitario;  //Soma dos valores
    let carrinho = document.getElementById('lista-produtos')

    //Adicionando itens no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;

  //Somando o valor total
 totalGeral = totalGeral + preco;

 let campoTotal = document.getElementById('valor-total')

 campoTotal.textContent = `R$ ${totalGeral}`
 document.getElementById('quantidade').value = 0; // Zera o valor da quantidade de produtos apos selecionar outro
}



function limpar()
{

}