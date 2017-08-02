$("#botao-placar").click(mostraPlacar);

function mostraPlacar() {
    $(".placar").stop().slideToggle(600);
}

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "marcelo";
    var numPalavras = $("#contador-palavras").text();
    var linha = novaLinha(usuario, numPalavras);

    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.prepend(linha);
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").attr("href", "#").addClass("botao-remover");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(event) {
    event.preventDefault();

    var linha = $(this).parent().parent().remove();

    linha.fadeOut(1000);
    setTimeout(function () {
        linha.remove();
    }, 1000)
}
