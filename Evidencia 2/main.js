addEventListener("DOMContentLoaded", (e)=>{
    let form = document.querySelector('#form')
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target))
        let uno = dataInput.uno
        let dos = dataInput.dos
        let tres = dataInput.tres
        let cuatro = dataInput.cuatro
        if (uno == 'v'){
            let uno = document.getElementById('uno');
            uno.style.background="#00ff00";
            }
            else{
                let uno = document.getElementById('uno')
                uno.style.background="#FF0000";
            }
        if (dos == 'f'){
            let dos = document.getElementById('dos');
            dos.style.background="#00ff00";
            }
            else{
                let dos = document.getElementById('dos');
                dos.style.background="#FF0000";
            }
        if (tres == 'f'){
            let tres = document.getElementById('tres');
            tres.style.background="#00ff00";
            }
            else{
                let tres = document.getElementById('tres');
                tres.style.background="#FF0000";

            }
        if (cuatro == 'f'){
            let cuatro = document.getElementById('cuatro');
            cuatro.style.background="#00ff00";
            }
            else{
                let cuatro = document.getElementById('cuatro');
                cuatro.style.background="#FF0000";
    
            }
    })
    let refresh = document.getElementById('refresh');
    refresh.addEventListener('click', _ => {
            location.reload();
})
})