let totalGeral = 0;
limpar();

function adicionar() {
  // Calcular valores, nomes do produto, quantidade e valor
  let Produto = document.getElementById("produto").value;
  let nomeProduto = Produto.split(" - ")[0]; // Ajustei para dividir corretamente pelo " - "
  let valorUnitario = parseFloat(Produto.split("R$")[1]); // Garantir que o valor é numérico
  let quantidade = document.getElementById("quantidade").value;
  
  // Calcular o preço, o nosso subtotal
  let preco = quantidade * valorUnitario;

  let carrinho = document.getElementById("lista-produtos");

  // Adicionar no carrinho
  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toFixed(2)}</span>
        </section>`;

  // Atualizar o valor total
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;
  
  // Limpar o campo de quantidade após adicionar
  document.getElementById("quantidade").value = 0;
}

function limpar() {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById("valor-total").innerText = 'R$ 0,00';
}
