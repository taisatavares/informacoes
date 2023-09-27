
function resultado(){
    var nome = document.getElementById("nome")
    var cid = document.getElementById("cidade")
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.getElementById("res")
    
    if(nome.value.length==0 || fano.value.length==0 || cid.value.length==0){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        var sex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        if(sex[0].checked){
            genero = 'Homem'
        } else if (sex[1].checked){
            genero = 'Mulher'
        }
    

    
        res.innerHTML= `Olá ${nome.value}, você é ${genero}, tem ${idade} anos e mora em ${cid.value}!`
    }
        
}