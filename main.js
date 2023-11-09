 const form = document.getElementById('form-atividade');
 const imgAprovado = '<img src=" ./images/aprovado.png" alt=" Emoji celebrando"/>';
 const imgReprovado = '<img src=" ./images/reprovado.png" alt=" Emoji celebrando" />';
 const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
 const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
 const notaMinima =parseFloat(prompt("Digite a nota de média: "));
 const atividades = [];
 const notas = [];

if(notaMinima > 0 && notaMinima <=10){

}else{
    alert('Digite uma média entre 0 e 10');
    const notaMinima =parseFloat(prompt("Digite uma nota de média entre 0 e 10: "));
}

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

adicionaLinha();
atualizaPagina();
atualizaMediaFinal();





});
function adicionaLinha(){
    
const inputNomeAtividade = document.getElementById('nome-atividade');
const inputNotaAtividade = document.getElementById('nota-atividade');





if(atividades.includes( `${(inputNomeAtividade.value).toLowerCase()}`.replace(/\s/g, '') ) ) {

    alert(`A atividade: ${inputNomeAtividade.value} já foi adicionada`)

 } else{
    

    atividades.push( ((inputNomeAtividade.value).toLowerCase()).replace(/\s/g, '') );
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';
    
    linhas +=linha;
    
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

    

}


}
function atualizaPagina(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
    
}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for( let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
}
    return somaDasNotas / notas.length;
}



