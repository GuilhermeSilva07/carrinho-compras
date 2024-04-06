

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];                  //Quebrando o texto em partes
    let valorUnitario = produto.split('R$')[1]; 
    let quantidade = document.getElementById('quantidade'); 


    //Calcular o preço, subtotal
    let preco = quantidade.value * valorUnitario;  //Soma dos valores
}



function limpar()
{

}