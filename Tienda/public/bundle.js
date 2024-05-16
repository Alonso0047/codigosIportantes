'use strict';

const producto$1 = document.getElementById('producto');
const productoImagen= producto$1.querySelector('.producto__imagen');
const thumbs = producto$1.querySelector('.producto__thumbs');

//Color
const propiedadColor= producto$1.querySelector('#propiedad-color');

//Cantidad

const btnDisminuirCantidad = producto$1.querySelector('#disminuir-cantidad');
const btnIncrementarCantidad = producto$1.querySelector('#incrementar-cantidad');
const inputCantidad = producto$1.querySelector('#cantidad');

//Funcionalidad thums
thumbs.addEventListener('click',(e)=>{
    if(e.target.tagName==='IMG'){
        //Para obtener una imagen del html y la carpeta y colocarla donde indiquemos
        const imagenSRC = e.target.src;
        const lastIndex = imagenSRC.lastIndexOf('/');
        //Cortamos la cadena de texto para obtener solamente una parte
        const nombreImagen = imagenSRC.substring(lastIndex+1);
        productoImagen.src=`./img/tennis/${nombreImagen}`;
    }
});

//Funcionalidad de color
propiedadColor.addEventListener('click', (e)=>{


    /* Estamso trabajando con el valor de value
    Que tiene que coincidir con el nombre de la imagen
    <label for="negro">
		<input
		type="radio"
		class="producto__radio-input"
		name="color"
		id="negro"
	    value="negro"
		checked
		/> */


    if(e.target.tagName==='INPUT'){
        productoImagen.src = `./img/tennis/${e.target.value}.jpg`;

    }
});


btnIncrementarCantidad.addEventListener('click', (e)=>{
    inputCantidad.value=parseInt(inputCantidad.value)+1;
});

btnDisminuirCantidad.addEventListener('click', (e)=>{
    if(parseInt(inputCantidad.value)>1){
        inputCantidad.value=parseInt(inputCantidad.value)-1;
    }
    
});

var data = {
    productos:[
        {
            id: '1',
            nombre: 'Tennis Converse Standard',
            descripcion: 'Zapatillas para todo tipo de sexo y edad',
            precio: 500.0,
            colores: ['negro','rojo', 'amarillo'],
            tamaños: ['1,5', '2','2,5','3','3,5','4'],   

        },

        {
            id: '2',
            nombre: 'Tennis Converse 2000',
            descripcion: 'Zapatillas de calidad y a buen precio',
            precio: 450.0,
            colores: ['negro','rojo', 'amarillo'],
            tamaños: ['1,5', '2','2,5','3','3,5','4'],   

        }
    ]
};

const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');
const btnAgregarAlCarrito = document.getElementById('agregar-al-carrito');
const producto = document.getElementById('producto');
let carrito = [];
const notificacion = document.getElementById('notificacion');

const formatearMoneda = new Intl.NumberFormat('es-ES', {style: 'currency', currency: 'EUR'});



const renderCarrito = ()=>{
    ventanaCarrito.classList.add('carrito--active');

    //Eliminamos todos los productos anteriores para construir el carrito desde 0
    const productosAnteriores = ventanaCarrito.querySelectorAll('.carrito__producto');
    productosAnteriores.forEach((producto) => producto.remove());

    let total = 0;



    //Comprobamos si hay productos
    if(carrito.length < 1){
        ventanaCarrito.classList.add('carrito--vacio');
    }else {
        //Eliminamos la clase del carrito vacio
        ventanaCarrito.classList.remove('carrito--vacio');
        carrito.forEach((productoCarrito)=>{

            //Igualamos el id de el producto de la base de datos y del que tenemos en el html que son los dos 1 para acceder al precio
            data.productos.forEach((productoBaseDatos)=>{
                if (productoBaseDatos.id===productoCarrito.id){
                    productoCarrito.precio=productoBaseDatos.precio;


                   total += productoBaseDatos.precio * productoCarrito.cantidad;

                }
    
            });


    
            
    
            //Establecemos la ruta de la imagen que vamos a querer mostrar
            let thumbSrc = producto.querySelectorAll('.producto__thumb-img')[0].src;
            if(productoCarrito.color==='rojo'){
                thumbSrc = './img/thumbs/rojo.jpg';
            }else if(productoCarrito.color==='amarillo'){
                thumbSrc = './img/thumbs/amarillo.jpg';
            }
    
    
            //Creamos una plantilla del codigo html
            const plantillaProducto=`
            <div class="carrito__producto-info">
                    <img src="${thumbSrc}" alt="" class="carrito__thumb" />
                        <div>
                            <p class="carrito__producto-nombre">
                                <span class="carrito__producto-cantidad">${productoCarrito.cantidad} x </span>${productoCarrito.nombre}
                            </p>
                            <p class="carrito__producto-propiedades">
                            Tamaño:<span>${productoCarrito.tamaño}</span> Color:<span>${productoCarrito.color}</span>
                            </p>
                        </div>
             </div>
            <div class="carrito__producto-contenedor-precio">
                    <button class="carrito__btn-eliminar-item" data-accion="eliminar-item-carrito">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                                            />
                                        </svg>
                                    </button>
                                    <p class="carrito__producto-precio">${formatearMoneda.format(productoCarrito.precio*productoCarrito.cantidad)}</p>
                                </div>
            `;
            //Creamos un div
            const itemCarrito = document.createElement('div');
            //Le agregamos la clase carrito producto 
            itemCarrito.classList.add('carrito__producto');
            //Insertamos la plantilla
            itemCarrito.innerHTML =  plantillaProducto;
            //Agregamos el producto a la ventana producto 
            ventanaCarrito.querySelector('.carrito__body').appendChild(itemCarrito);
    
        });
    }

    ventanaCarrito.querySelector('.carrito__total').innerText= formatearMoneda.format(total);
    
   

};

botonesAbrirCarrito.forEach((boton)=>{
    boton.addEventListener('click',()=>{
        renderCarrito();
    });
});

botonesCerrarCarrito.forEach((boton)=>{
    boton.addEventListener('click',()=>{
        ventanaCarrito.classList.remove('carrito--active');
    });
});

btnAgregarAlCarrito.addEventListener('click',(e)=>{
    const id = producto.dataset.productoId;
	const nombre = producto.querySelector('.producto__nombre').innerText;
	const cantidad = parseInt(producto.querySelector('#cantidad').value);
	const color = producto.querySelector('#propiedad-color input:checked').value;
	const tamaño = producto.querySelector('#propiedad-tamaño input:checked').value;

    if (carrito.length>0){
        let productoEnCarrito = false;
        carrito.forEach((item)=>{
            if (item.id===id && item.nombre===nombre && item.color===color && item.tamaño===tamaño){
                item.cantidad += cantidad;
                productoEnCarrito=true;
            }
                
            
        });

        if(!productoEnCarrito){
            carrito.push({
                id: id,
                cantidad: cantidad,
                color: color,
                nombre: nombre,
                tamaño: tamaño
            });
        }
    }else {
        carrito.push({
        id: id,
        cantidad: cantidad,
        color: color,
        nombre: nombre,
        tamaño: tamaño
    });
 }

    //Establecemos la ruta de la imagen que vamos a querer mostrar

    let thumbsSrc = producto.querySelectorAll('.producto__thumb-img')[0].src;
    if(color==='rojo'){
        thumbsSrc = './img/thumbs/rojo.jpg';
    } else if(color==='amarillo'){
        thumbsSrc = './img/thumbs/amarillo.jpg';
    }

    notificacion.querySelector('img').src=thumbsSrc;
    //Mostramos la notificacion
    notificacion.classList.add('notificacion--active');
    //Despues de 5 segundos la ocultamos

    setTimeout(()=>{
        notificacion.classList.remove('notificacion--active');
    },5000);

    
});
//Botones eliminar carrito
ventanaCarrito.addEventListener('click', (e)=>{
    if(e.target.closest('button')?.dataset.accion==='eliminar-item-carrito'){
        const producto = e.target.closest('.carrito__producto');
        const indexProducto = [...ventanaCarrito.querySelectorAll('.carrito__producto')].indexOf(producto);
        carrito = carrito.filter((item, index)=>{
            if(index !== indexProducto){
                return item;
            }
        });
        renderCarrito();
    }
});

ventanaCarrito.querySelector('#carrito__btn-comprar').addEventListener('click', ()=>{
    
});

class Tabs{
    constructor(idElemento){
        //Creamos una variable para la pestaña
         this.tabs = document.getElementById(idElemento);
         //Creamos otra variable para los botones de navegacion
         this.nav = this.tabs.querySelector('.tabs');
         this.nav.addEventListener('click', (e)=>{
           if([...e.target.classList].includes('tabs__button')){
            const tab = e.target.dataset.tab;

            if(this.tabs.querySelector('.tab--active')){
                this.tabs.querySelector('.tab--active').classList.remove('tab--active');
            }

            if(this.tabs.querySelector('.tabs__button--active')){
                this.tabs.querySelector('.tabs__button--active').classList.remove('tabs__button--active');
            }

            this.tabs.querySelector(`#${tab}`).classList.add('tab--active');
            e.target.classList.add('tabs__button--active');
           } 
         });
    }
}

new Tabs('mas-informacion');
