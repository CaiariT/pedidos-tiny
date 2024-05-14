function clicarElemento(seletor) {
  const elemento = document.querySelector(seletor);
  if (elemento) {
    elemento.click();
  }
}

function esperar(segundos) {
  return new Promise(resolve => setTimeout(resolve, segundos * 1000));
}

async function realizarAcoes() {
  while (true) {
    clicarElemento('#tabelaListagem > thead > tr > th.checkbox-datatable.ignore-config-coluna.js-check-label > span');
    await esperar(2);

    clicarElemento('#page-wrapper > div.panel.panel-list > div.bottom-bar > div:nth-child(1) > div.container-actions-selecao.featured-actions-scope.active > div.featured-actions-container > button:nth-child(2)');
    await esperar(3);

    clicarElemento('#btn-sincronizar-situacao-pedidos-ecommerce-popup > button');
    await esperar(50);

    clicarElemento('#sincronizacaoSituacaoPedidosVendasEcommercePopup > div.modal-dialog.modal-lg > div > div.modal-footer > button');
    await esperar(3);

    clicarElemento('#divPaginacaoBottom > ul > li.pnext > a');
    await esperar(7);
  }
}

realizarAcoes();
