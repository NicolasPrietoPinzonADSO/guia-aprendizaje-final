addEventListener("DOMContentLoaded", (e)=>{
    let form = document.querySelector('#form')
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target))
        let año = dataInput.año;
        if ((año % 4 == 0 && año % 100 !=0) || año % 400 == 0){
            resultado.innerHTML = `El año ${año} es bisisesto `
        }
        else{
            resultado.innerHTML = `El año ${año} no es bisisesto`
        }
    año == 0;
    })
})