document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('form-sorteador').addEventListener('submit',function(ev){
        ev.preventDefault()
        let numeroMax = document.getElementById('numero-max').value;
        numeroMax = parseInt(numeroMax);
        let numeroALeatorio = Math.random () * numeroMax;
        numeroALeatorio = Math.floor(numeroALeatorio + 1)
        document.getElementById('resultado-valor').innerText = numeroALeatorio;
        document.querySelector('.resultado').style.display = "block"
    })
})