addEventListener("DOMContentLoaded", (e)=>{
    let form=document.querySelector('#input')
    
    form.addEventListener("submit",(e)=>{
        e.preventDefault();       
        let dataInput = Object.fromEntries(new FormData(e.target))
        let acum = 0
            let ingredientes= dataInput.ingrediente
            let cantidad= (dataInput.cnt)
            let costo = Number(dataInput.costoIngre)
            let tabla=document.querySelector("tbody");
            tabla.insertAdjacentHTML("beforeend",`
                <tr>
                    <td> ${ingredientes}  </td>
                    <td> ${cantidad}</td>
                    <td> ${costo} </td>
                </tr>`)

        })
    
    })              
