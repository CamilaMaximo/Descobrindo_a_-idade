
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
                        img.setAttribute ('src','img/bebemenino1.png')

                    }else if (idade < 21){
                        img.setAttribute('src','img/jovemhomem1.png')
                    }else if(idade < 50){
                        img.setAttribute ('src','img/homem1.png')
                    }else {
                        img.setAttribute ('src','img/idoso1.png')
                    }

            } else if (fsex[1].checked){
                    genero = 'Mulher'
                    if(idade >=0 && idade < 10){
                        img.setAttribute('src','img/bebemenina1.png')

                    }else if (idade < 21){
                        img.setAttribute('src','img/jovemmulher1.png')

                    }else if(idade < 50){
                        img.setAttribute('src','img/mulher1.png')

                    }else {
                        img.setAttribute('src','img/idosa1.png')

                    }
            }
            res.innerHTML= `Detectamos ${genero} com ${idade} anos. `
            res.appendChild(img)

        }     

}


