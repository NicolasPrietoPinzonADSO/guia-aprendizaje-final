addEventListener("DOMContentLoaded", (e)=>{
    let form = document.querySelector('#form')
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target))
        let centi = dataInput.centi
        faren = (9/5*centi)+32;
        resultado.innerHTML = `De ${centi}° centigrados en su equivalente a grados Fahrenheit es de ${faren}°`
    })
})