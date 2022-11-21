addEventListener("DOMContentLoaded", (e)=>{
    let form=document.querySelector('#input')

    form.addEventListener("submit",(e)=>{
        e.preventDefault();       

        let datosEntrada = Object.fromEntries(new FormData(e.target))
            let dolares= Number (datosEntrada.dolares)
            let pesos= 4809.50
            let res= dolares * pesos



            let tabla=document.querySelector("tbody");
            tabla.insertAdjacentHTML("beforeend",`
                <tr>
                    <td> ${dolares}  </td>
                    <td> ${res} </td>
                </tr>
                `)
    })         

})