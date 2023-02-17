const imagenes = document.querySelectorAll('.img__galery');
const imagenligt = document.querySelector('.agregar__imagen');
const contenedorlight = document.querySelector('.image__slide');


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerimagen(imagen.getAttribute('src'))
     
    })
})

contenedorlight.addEventListener('click', (e)=>{
    if(e.target !== imagenligt)
    {
        contenedorlight.classList.toggle('show');
        imagenligt.classList.toggle('show__imagen')
    }
})



const aparecerimagen = (imagen)=>
{
    imagenligt.src = imagen;
    contenedorlight.classList.toggle('show')
    imagenligt.classList.toggle('show__imagen')
}