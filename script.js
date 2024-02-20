function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = window.document.querySelector("input#txtano")
    let res = window.document.querySelector("div#res")
    if (fano.value == 0 || fano.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked){
            genero = "Homem"
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute("src", "menino.png.png")
            } else if (idade >= 10 && idade < 21){
                // jovem
                img.setAttribute("src", "garoto.png.png")
            } else if (idade < 50){
                //adulto
                img.setAttribute("src", "homem.png.png")
            } else {
                //idoso
                img.setAttribute("src", "idoso.png.png")
            }

        } else if (fsex[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute("src", "menina.png.png")
            } else if (idade >= 10 && idade < 21){
                // jovem
                img.setAttribute("src", "garota.png.png")
            } else if (idade < 50){
                //adulto
                img.setAttribute("src", "mulher.png.png")
            } else {
                //idoso
                img.setAttribute("src", "idosa.png.png")
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}