function subtime(){
    var select = 4;
    var v1;
    var v2;
    var v3;
    var v5;
    var v6;
    var v7;

    gs();
    setInterval(function(){gs();},10000);

    window.addEventListener("resize",function() {
        gs();
    })

    function gs() {
        select++;
        if(select > 7){
            select = 1;
        }
        if(select == 4){v1 = 1;v2 = 2;v3 = 3;v5 = 5;v6 = 6;v7 = 7;}
        if(select == 5){v1 = 2;v2 = 3;v3 = 4;v5 = 6;v6 = 7;v7 = 1;}
        if(select == 6){v1 = 3;v2 = 4;v3 = 5;v5 = 7;v6 = 1;v7 = 2;}
        if(select == 7){v1 = 4;v2 = 5;v3 = 6;v5 = 1;v6 = 2;v7 = 3;}
        if(select == 1){v1 = 5;v2 = 6;v3 = 7;v5 = 2;v6 = 3;v7 = 4;}
        if(select == 2){v1 = 6;v2 = 7;v3 = 1;v5 = 3;v6 = 4;v7 = 5;}
        if(select == 3){v1 = 7;v2 = 1;v3 = 2;v5 = 4;v6 = 5;v7 = 6;}

        if(window.innerWidth > 1000){
            document.querySelector(".l1").style.backgroundImage = "url('../img/filmes/l"+ v1 +".png')";
            document.querySelector(".l2").style.backgroundImage = "url('../img/filmes/l"+ v2 +".png')";
            document.querySelector(".l3").style.backgroundImage = "url('../img/filmes/l"+ v3 +".png')";
            document.querySelector(".l4").style.backgroundImage = "url('../img/filmes/l"+ select +".png')";
            document.querySelector(".l5").style.backgroundImage = "url('../img/filmes/l"+ v5 +".png')";
            document.querySelector(".l6").style.backgroundImage = "url('../img/filmes/l"+ v6 +".png')";
            document.querySelector(".l7").style.backgroundImage = "url('../img/filmes/l"+ v7 +".png')";
            document.querySelector(".h1d").style.display = "inline-block";
            document.querySelector(".h2d").style.display = "inline-block";
            document.querySelector(".h3d").style.display = "inline-block";
            document.querySelector(".h4d").style.display = "inline-block";
            document.querySelector("#f1c").style.width = "10vw";
            document.querySelector("#f1c").style.height = "13vw";
        }else if(window.innerWidth > 600){
            document.querySelector(".l2").style.backgroundImage = "url('../img/filmes/l"+ v2 +".png')";
            document.querySelector(".l3").style.backgroundImage = "url('../img/filmes/l"+ v3 +".png')";
            document.querySelector(".l4").style.backgroundImage = "url('../img/filmes/l"+ select +".png')";
            document.querySelector(".l5").style.backgroundImage = "url('../img/filmes/l"+ v5 +".png')";
            document.querySelector(".l6").style.backgroundImage = "url('../img/filmes/l"+ v6 +".png')";
            document.querySelector(".h1d").style.display = "none";
            document.querySelector(".h2d").style.display = "inline-block";
            document.querySelector(".h3d").style.display = "inline-block";
            document.querySelector(".h4d").style.display = "none";
        }else{
            document.querySelector(".l3").style.backgroundImage = "url('../img/filmes/l"+ v3 +".png')";
            document.querySelector(".l4").style.backgroundImage = "url('../img/filmes/l"+ select +".png')";
            document.querySelector(".l5").style.backgroundImage = "url('../img/filmes/l"+ v5 +".png')";
            document.querySelector(".h1d").style.display = "none";
            document.querySelector(".h2d").style.display = "none";
            document.querySelector(".h3d").style.display = "none";
            document.querySelector(".h4d").style.display = "none";
        }
    }


    var text = "GebaFlix Oficial";
    var tipe = 0;
    var tipeMax = text.length;
    setInterval(function() {
        tipe++;
        if(tipe > tipeMax){
            tipe = 1;
        }
        document.querySelector("#title").text = text.slice(0,tipe);
    },300);
}
