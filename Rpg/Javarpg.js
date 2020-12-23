var attaquePerso = 25;
var cibleJoueur = 0;



document.getElementById("bat1").onmouseover = function(){
    document.getElementById("stats1").style.visibility = "visible";
}

document.getElementById("bat1").onmouseout = function(){
    document.getElementById("stats1").style.visibility = "hidden";
}

document.getElementById("bat2").onmouseover = function(){
    document.getElementById("stats2").style.visibility = "visible";
}

document.getElementById("bat2").onmouseout = function(){
    document.getElementById("stats2").style.visibility = "hidden";
}


document.getElementById("bat3").onmouseover = function(){
    document.getElementById("stats3").style.visibility = "visible";
}
document.getElementById("bat3").onmouseout = function(){
    document.getElementById("stats3").style.visibility = "hidden";
}

bcible1.onclick = function(){
    document.getElementById("stats1").style.visibility = "visible";
    document.getElementById("stats2").style.visibility = "hidden";
    document.getElementById("stats3").style.visibility = "hidden";
    cibleJoueur = 1;
}

bcible2.onclick = function(){
    document.getElementById("stats1").style.visibility = "hidden";
    document.getElementById("stats2").style.visibility = "visible";
    document.getElementById("stats3").style.visibility = "hidden";
    cibleJoueur = 2;
}

 bcible3.onclick = function(){
    document.getElementById("stats1").style.visibility = "hidden";
    document.getElementById("stats2").style.visibility = "hidden";
    document.getElementById("stats3").style.visibility = "visible";
    cibleJoueur = 3;
}

battaqueE.onclick = function(){
    if (cibleJoueur == 1){
        pvM1 = document.getElementById("pvMonstre1").innerHTML;
        pvM1-= attaquePerso;
        document.getElementById("pvMonstre1").innerHTML = pvM1;
        if (pvM1 <= 0){
            document.getElementById("boutonCible1").disabled = true;
            document.getElementById("bat1").style.visibility = "hidden";
            document.getElementById("stats1").style.visibility = "hidden";
        }
    }
    if (cibleJoueur == 2){
        pvM2 = document.getElementById("pvMonstre2").innerHTML;
        pvM2 -= attaquePerso;
        document.getElementById("pvMonstre2").innerHTML = pvM2;
        if (pvM2 <= 0){
            document.getElementById("boutonCible2").disabled = true;
            document.getElementById("bat2").style.visibility = "hidden";
            document.getElementById("stats2").style.visibility = "hidden";
        }
    }
    if (cibleJoueur == 3){
        pvM3 = document.getElementById("pvMonstre3").innerHTML;
        pvM3 -= attaquePerso;
        document.getElementById("pvMonstre3").innerHTML = pvM3;
        if(pvM3 <=0){
            document.getElementById("boutonCible3").disabled = true;
            document.getElementById("bat3").style.visibility = "hidden";
            document.getElementById("stats3").style.visibility = "hidden";
        }
    }
}

battaqueS.onclick = function(){
    if (cibleJoueur == 1){
        pvM1 = document.getElementById("pvMonstre1").innerHTML;
        pvM1-= attaquePerso;
        document.getElementById("pvMonstre1").innerHTML = pvM1;
        if (pvM1 <= 0){
            document.getElementById("boutonCible1").disabled = true;
            document.getElementById("bat1").style.visibility = "hidden";
            document.getElementById("stats1").style.visibility = "hidden";
        }
    }
    if (cibleJoueur == 2){
        pvM2 = document.getElementById("pvMonstre2").innerHTML;
        pvM2 -= attaquePerso;
        document.getElementById("pvMonstre2").innerHTML = pvM2;
        if (pvM2 <= 0){
            document.getElementById("boutonCible2").disabled = true;
            document.getElementById("bat2").style.visibility = "hidden";
            document.getElementById("stats2").style.visibility = "hidden";
        }
    }
    if (cibleJoueur == 3){
        pvM3 = document.getElementById("pvMonstre3").innerHTML;
        pvM3 -= attaquePerso;
        document.getElementById("pvMonstre3").innerHTML = pvM3;
        if(pvM3 <=0){
            document.getElementById("boutonCible3").disabled = true;
            document.getElementById("bat3").style.visibility = "hidden";
            document.getElementById("stats3").style.visibility = "hidden";
        }
    }
}

battaqueC.onclick = function(){
    if (cibleJoueur == 1){
        pvM1 = document.getElementById("pvMonstre1").innerHTML;
        pvM1-= attaquePerso;
        document.getElementById("pvMonstre1").innerHTML = pvM1;
        if (pvM1 <= 0){
            document.getElementById("boutonCible1").disabled = true;
            document.getElementById("bat1").style.visibility = "hidden";
            document.getElementById("stats1").style.visibility = "hidden";
        }
    }
    if (cibleJoueur == 2){
        pvM2 = document.getElementById("pvMonstre2").innerHTML;
        pvM2 -= attaquePerso;
        document.getElementById("pvMonstre2").innerHTML = pvM2;
        if (pvM2 <= 0){
            document.getElementById("boutonCible2").disabled = true;
            document.getElementById("bat2").style.visibility = "hidden";
            document.getElementById("stats2").style.visibility = "hidden";
        }
    }
    if (cibleJoueur == 3){
        pvM3 = document.getElementById("pvMonstre3").innerHTML;
        pvM3 -= attaquePerso;
        document.getElementById("pvMonstre3").innerHTML = pvM3;
        if(pvM3 <=0){
            document.getElementById("boutonCible3").disabled = true;
            document.getElementById("bat3").style.visibility = "hidden";
            document.getElementById("stats3").style.visibility = "hidden";
        }
    }
}

battaqueF.onclick = function(){
    if (cibleJoueur == 1){
        pvM1 = document.getElementById("pvMonstre1").innerHTML;
        pvM1-= attaquePerso;
        document.getElementById("pvMonstre1").innerHTML = pvM1;
        if (pvM1 <= 0){
            document.getElementById("boutonCible1").disabled = true;
            document.getElementById("bat1").style.visibility = "hidden";
            document.getElementById("stats1").style.visibility = "hidden";
        }
    }
    if (cibleJoueur == 2){
        pvM2 = document.getElementById("pvMonstre2").innerHTML;
        pvM2 -= attaquePerso;
        document.getElementById("pvMonstre2").innerHTML = pvM2;
        if (pvM2 <= 0){
            document.getElementById("boutonCible2").disabled = true;
            document.getElementById("bat2").style.visibility = "hidden";
            document.getElementById("stats2").style.visibility = "hidden";
        }
    }
    if (cibleJoueur == 3){
        pvM3 = document.getElementById("pvMonstre3").innerHTML;
        pvM3 -= attaquePerso;
        document.getElementById("pvMonstre3").innerHTML = pvM3;
        if(pvM3 <=0){
            document.getElementById("boutonCible3").disabled = true;
            document.getElementById("bat3").style.visibility = "hidden";
            document.getElementById("stats3").style.visibility = "hidden";
        }
    }
}