addEventListener("DOMContentLoaded", (e)=>{
    let form = document.querySelector('#form')
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target))
        let nombre = dataInput.nombre
        let fecha = dataInput.fecha
        let fechaActual = dataInput.fechaActual
        edad = fechaActual-Number(fecha);
        resultado.innerHTML = `${nombre} tiene ${edad} años de edad `
        
    })
})