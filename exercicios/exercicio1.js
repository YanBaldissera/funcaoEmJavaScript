function escrevaMeuNome (nome){
    return 'Seu nome é: ' + nome;
}

function verificarIdade(idade){
    if(idade >= 18){
        return escrevaMeuNome('Yan') + ' É maior de idade';
    }else{
        return 'É menor de idade';
    }
}

(function (){
    const nome = 'Yan';
    const idade = 26;
    console.log(escrevaMeuNome(nome));
    console.log('Sua idade é:' + idade);
    console.log(verificarIdade(idade));
})();

