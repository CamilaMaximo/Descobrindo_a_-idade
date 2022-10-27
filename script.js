
function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
      if ( fano.value.length == 0 || Number(fano.value > ano)){
        window.alert('[ERRO] verifique os dados e tente novamente!')
      }else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero=``
            
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
    
            if (fsex[0].checked){
                    genero = 'Homem'
                    if(idade >=0 && idade < 10){
                        img.setAttribute ('src','imagem/bebemenino1.png')

                    }else if (idade < 21){
                        img.setAttribute('src','imagem/jovemhomem1.png')
                    }else if(idade < 50){
                        img.setAttribute ('src','imagem/homem1.png')
                    }else {
                        img.setAttribute ('src','imagem/idoso1.png')
                    }

            } else if (fsex[1].checked){
                    genero = 'Mulher'
                    if(idade >=0 && idade < 10){
                        img.setAttribute('src','imagem/bebemenina1.png')

                    }else if (idade < 21){
                        img.setAttribute('src','imagem/jovemmulher1.png')

                    }else if(idade < 50){
                        img.setAttribute('src','imagem/mulher1.png')

                    }else {
                        img.setAttribute('src','imagem/idosa1.png')

                    }
            }
            res.innerHTML= `Detectamos ${genero} com ${idade} anos. `
            res.appendChild(img)

        }     

}


