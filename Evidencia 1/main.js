addEventListener("DOMContentLoaded", (e) =>{
    let option = document.querySelector('#first1');
        option.addEventListener('change', (e)=>{
        let change = document.querySelector('.resultado')
    if (option.value == 'true'){
        change.textContent = `Correcto, debido a que el operador OR valida si alguna de las expresiones es True y si lo es devuelve True si ambas son False devuelve False`
    }
    else{
        change.textContent = `Incorrecto,  al menos una de las dos expresiones es True por lo tanto lo que devuelve el operando OR es True`
    }
    })
    let option1 = document.querySelector('#first2');
    option1.addEventListener('change', (e)=>{
    let change1= document.querySelector('.resultado1')
    if (option1.value == 'false'){
        change1.textContent = 'Correcto, debido a que el operador AND valida si ambas expresiones son True nos devolvera True, pero si al menos una de ellas no es True, nos devolvera False'
    }
    else{
        change1.textContent = 'Incorrecto, debido a que al menos una de las dos expresiones que nos retorna es False, por lo tanto es False'
    }
})
})