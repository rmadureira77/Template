function relogio() {
    
    var relogio = new Date()

    var horas = relogio.getHours()

    var minutos = relogio.getMinutes()

    var segundos = relogio.getSeconds()
    
    var rel = document.getElementById("rel1")

    

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
    
    if (horas > 15) {
        
        bkg.style.backgroundImage = "url(./images/noite.jpg)"

    }

}

window.setInterval("relogio()", 1000)