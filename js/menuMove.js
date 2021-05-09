function clique(value) {
    if(value == 1){
        document.getElementById('nullSection').innerHTML = "<section id='nullSection'><section id='mn'><div onclick='clique(2)'><h3>Menu</h3></div></section>";
    }else if(value == 2){
        document.getElementById('nullSection').innerHTML = "<section id='op'><div  onclick='clique(1)'><h3>Menu</h3></div><input type='text'  onclick='pesquisa()' class='gb1' name='pesquisar' placeholder='Pesquisar...' title='Barra de Pesquisa' maxlength='100' size='100'><input type='button' class='gb2' name='FilmeseSeries' value='Filmes e Series' title='Filmes e Series'><input type='button' class='gb2' name='PedirumFilme' value='Pedir um Filme' title='Peça um Filme'><input type='button' class='gb2' name='Contato' value='Entrar em Contato' title='Contato'></section>";
    }
}

function pesquisa() {
    console.log('Pesquisando');
    var url = window.location.href;
    url = url.split('/');
    for(var i = 0;i<url.length;i++){
        if(i = url.length-1){
            if(url[i] != "pesquisar.php"){
                window.location.href = "pesquisar.php";
            }
        }
    }
}

function pesquisa() {
    
}