function relogio() {
    
    var relogio = new Date()

    var horas = relogio.getHours()

    var minutos = relogio.getMinutes()

    var segundos = relogio.getSeconds()    

    var dat = relogio.toLocaleDateString();

   
    var rel = document.getElementById("rel1")

    var data = document.getElementById("dat1")

    data.innerHTML = `${dat}`

    if (horas < 10) {
        horas = "0"+horas
    }

    if (minutos < 10) {
        minutos = "0"+minutos
    }

    if (segundos < 10) {
        segundos = "0"+segundos
    }

    

    rel.innerHTML = `${horas}:${minutos}:${segundos}`

    background();

}

function background() {
    
    var relogio = new Date()

    var horas = relogio.getHours()

    var bkg = document.querySelector("body")

    if (horas > 0 && horas <= 6) {
        
        bkg.style.backgroundImage = "url(./images/noite.jpg)"

    }

    if (horas > 6 && horas <= 7) {
        
        bkg.style.backgroundImage = "url(./images/amanhecer.jpg)"

    }
    
    if (horas > 7 &&  horas < 18) {
        
        bkg.style.backgroundImage = "url(./images/dia.jpg)"

    }
    
    if ( horas >= 18 && horas < 19) {
        
        bkg.style.backgroundImage = "url(./images/lusco.jpg)"

    }
    if (horas >= 19  && horas <= 24) {
        
        bkg.style.backgroundImage = "url(./images/noite.jpg)"

    }

    

}

window.setInterval("relogio()", 1000)