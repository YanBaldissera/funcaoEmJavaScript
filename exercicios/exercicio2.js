//meu
/*function calcularJuros(valorProduto, formaPagamento) {
    if (formaPagamento === 1) {
        return valorProduto - (valorProduto * 0.10);
    } else if (formaPagamento === 2) {
        return valorProduto - (valorProduto * 0.15);
    } else if (formaPagamento === 3) {
        return valorProduto;
    } else {
        return valorProduto + (valorProduto * 0.10);
    }

}

(function () {
    const valorProduto = 100;
    const formaPagamento = 2;

    console.log(calcularJuros(valorProduto, formaPagamento));
})();*/


//professor ficou melhor

function aplicardesconto(valor, desconto) {
    return (valor - (valor * desconto / 100));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * juros / 100));
}

const precoEtiqueta = 100;
const formaDePagmento = 1;

if (formaDePagmento === 1) {
    console.log(aplicardesconto(precoEtiqueta, 10));
} else if (formaDePagmento === 2) {
    console.log(aplicardesconto(precoEtiqueta, 15));
} else if (formaDePagmento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta, 10));
}

