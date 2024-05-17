const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');
const cargarImagen=(entradas, observador)=>{
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }else{
            //entrada.target.classList.remove('visible');
        }
    });
}

const observador = new IntersectionObserver(cargarImagen,{
    root: null,
    //Esto cuando la imagen entre en el margen el codigo se ejecuta
    rootMargin: '0px',
    threshold: 1.0 
});
//Este metodo sirve para que imagenes queremos que se ejecute el codigo
observador.observe(imagen1);
observador.observe(imagen2);