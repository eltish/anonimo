
////////////////////////////////////////CARRITO DE COMPRAS///////////////////////////////////////////////////////
const btnIconoCarrito = document.querySelector('.container-cart-icon')
const contenedorDeCarrito = document.querySelector('.container-cart-products')


btnIconoCarrito.addEventListener('click', function () {
    contenedorDeCarrito.classList.toggle('hidden-cart')

    
})

/* ======================================================== */
const carritoInfo = document.querySelector('.cart-product')
const filaDeProducto = document.querySelector('.fila-producto')

//Lista de contenedores de todos los productos
 const listaProductos = document.querySelector('.container')

 //variable de arreglos de productos
 let allProducts = [];

 const valorTotal = document.querySelector('.total-pagar');

 const contadorProductos = document.querySelector('#numero')

const carritoVacio = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

 listaProductos.addEventListener('click', function(event){
    if (event.target.classList.contains('botonAgregarAlCarrito')) {
        const  product = event.target.parentElement; 
        
        const infoProductos =  {
            cantidad: 1,
            titulo: product.querySelector('h1').textContent,
            precio: product.querySelector('h3').textContent
        };
        

        const existe = allProducts.some(product => product.titulo === infoProductos.titulo)
        
            if (existe) {
                const productsExiste = allProducts.map(product =>{
                    if(product.titulo === infoProductos.titulo){
                        product.cantidad++;
                        return product
                    }else{
                        return product
                    }
                })
                allProducts = [...productsExiste]

            }else{
                allProducts =[...allProducts,infoProductos] 
            }
            showHtml();
        }
    
 })

 filaDeProducto.addEventListener('click', e => {
        if (e.target.classList.contains('fa-xmark')) {
            const borrarProducto = e.target.parentElement;
            const titulo = borrarProducto.querySelector('p').textContent;

            allProducts = allProducts.filter(
                product => product.titulo !== titulo
            );
            
            console.log(allProducts);

            showHtml();
        }
    });




 //Funcion para mostrar HTML
 const showHtml = function () {
    // Si el carrito está vacío, mostrar el mensaje de carrito vacío y ocultar el total y los productos
    if (!allProducts.length) {
		carritoVacio.style.display = 'block';
		filaDeProducto.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
    // Si hay productos en el carrito, mostrar los productos y el total, y ocultar el mensaje de carrito vacío
        carritoVacio.style.display = 'none';
		filaDeProducto.classList.add('hidden');
		cartTotal.classList.remove('hidden');
        
	}


    //LIMPIAR HTML
    filaDeProducto.innerHTML = '';

    let total = 0;
    let totalDeProductos = 0;

    allProducts.forEach(product =>{
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.cantidad}</span>
                <p class="titulo-producto-carrito">${product.titulo}</p>
                <span class="precio-producto-carrito">${product.precio}</span>
                <i class="fa-solid fa-xmark"></i>
            </div>
            `;
            
        filaDeProducto.append(containerProduct);


        // Convertir el precio a un número flotante y sumarlo al total
        total += parseFloat(product.cantidad * product.precio.slice(1));
        totalDeProductos += product.cantidad;
        
    });

    valorTotal.innerText = `$${total.toFixed(2)}`; // Asegurar que el total tenga dos decimales
    contadorProductos.innerText = totalDeProductos;
 } 


////////////////////////////////////////////C A R R U S E L///////////////////////////////////////////////////////////

function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}



