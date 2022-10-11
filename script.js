// ARRAY de objetos con cada producto (id, nombre, alt, precio, img)

const productos = [
    {
        id: 1,
        nombre: "Alfombra 1",
        alt: "Alfombra",
        precio: 15000,
        img: "../asset/img/alfombras/alfombra1.jpg"
    },
    {
        id: 2,
        nombre: "Alfombra 2",
        alt: "Alfombra",
        precio: 15000,
        img: "../asset/img/alfombras/alfombra2.jpg"
    },
    {
        id: 3,
        nombre: "Alfombra 3",
        alt: "Alfombra",
        precio: 15000,
        img: "../asset/img/alfombras/alfombra3.jpg"
    },
    {
        id: 4,
        nombre: "Butaca 1",
        alt: "Butaca",
        precio: 23000,
        img: "../asset/img/butacas/butaca1.jpg"
    },
    {
        id: 5,
        nombre: "Butaca 2",
        alt: "Butaca",
        precio: 23000,
        img: "../asset/img/butacas/butaca2.jpg"
    },
    {
        id: 6,
        nombre: "Butaca 3",
        alt: "Butaca",
        precio: 23000,
        img: "../asset/img/butacas/butaca3.jpg"
    },
    {
        id: 7,
        nombre: "Butaca 4",
        alt: "Butaca",
        precio: 23000,
        img: "../asset/img/butacas/butaca4.jpg"
    },
    {
        id: 8,
        nombre: "Silla 1",
        alt: "Silla",
        precio: 28000,
        img: "../asset/img/sillas/silla1.jpg"
    },
    {
        id: 9,
        nombre: "Silla 2",
        alt: "Silla",
        precio: 28000,
        img: "../asset/img/sillas/silla2.jpg"
    },
    {
        id: 10,
        nombre: "Silla 3",
        alt: "Silla",
        precio: 28000,
        img: "../asset/img/sillas/silla3.jpg"
    },
    {
        id: 11,
        nombre: "Silla 4",
        alt: "Silla",
        precio: 28000,
        img: "../asset/img/sillas/silla4.jpg"
    },
    {
        id: 12,
        nombre: "Silla 5",
        alt: "Silla",
        precio: 28000,
        img: "../asset/img/sillas/silla5.jpg"
    },
    {
        id: 13,
        nombre: "Silla 6",
        alt: "Silla",
        precio: 28000,
        img: "../asset/img/sillas/silla6.jpg"
    },
    {
        id: 14,
        nombre: "Respaldo 1",
        alt: "Respaldo",
        precio: 28000,
        img: "../asset/img/respaldos/respaldo1.jpg"
    },
    {
        id: 15,
        nombre: "Respaldo 2",
        alt: "Respaldo",
        precio: 28000,
        img: "../asset/img/respaldos/respaldo2.jpg"
    },
    {
        id: 16,
        nombre: "Respaldo 3",
        alt: "Respaldo",
        precio: 28000,
        img: "../asset/img/respaldos/respaldo3.jpg"
    },
    {
        id: 17,
        nombre: "Respaldo 4",
        alt: "Respaldo",
        precio: 28000,
        img: "../asset/img/respaldos/respaldo4.jpg"
    },
    {
        id: 18,
        nombre: "Respaldo 5",
        alt: "Respaldo",
        precio: 28000,
        img: "../asset/img/respaldos/respaldo5.jpg"
    },
    {
        id: 19,
        nombre: "Respaldo 6",
        alt: "Respaldo",
        precio: 28000,
        img: "../asset/img/respaldos/respaldo6.jpg"
    },
    {
        id: 20,
        nombre: "Respaldo 7",
        alt: "Respaldo",
        precio: 28000,
        img: "../asset/img/respaldos/respaldo7.jpg"
    },
    {
        id: 21,
        nombre: "Respaldo 8",
        alt: "Respaldo",
        precio: 28000,
        img: "../asset/img/respaldos/respaldo8.jpg"
    }
]

console.log("Estoy funcionando");
let carrito = [];


// funcion para renderizar todos los productos en el main de la pagina productos.html
// 1ro traigo el id del main para colocar ahi con inner.HTML el array de objetos literales en productos.js

let mainProductos = document.getElementById("mainProductos");
const renderizarProductos = () => {
    productos.forEach((producto) => {
        console.log("hola");
        mainProductos.innerHTML += `
        <article>
            <img src= "${producto.img}" alt="${producto.alt}" class="imgProducto">
            <div>
                <h3>${producto.nombre}</h3>
                <h4>$ ${producto.precio}</h4>
                <button id=boton${producto.id} class="botonAgregar">Agregar al carrito</button>
            </div>
        </article>`;
    });
    
// *****************************
// evento
    // let botonAgregarCarrito = document.getElementById(`boton${producto.id}`);

    productos.forEach(producto => {

        document.getElementById(`boton${producto.id}`).onclick = () => {
            agregarCarrito(producto);
        }
    });
}
renderizarProductos();


// *****************************
// renderizar lista de productos agregados al carrito
let mainCarrito = document.getElementById("mainCarrito");


const agregarCarrito = (productoAgregado) => {
    productos.forEach(producto => {
        carrito.push(productoAgregado);
    console.log("se agrego un producto al carrito");
    document.getElementById("mainCarrito").innerHTML += 
    `
    <section class="carritoProductos">
        <article class="producto">
            <figure>
                <img src="${producto.img}">
                <p>${producto.nombre}</p>
            </figure>
            <div>
                <p>$${producto.precio}</p>
                <img src="../asset/icons/icon_close.png" alt="cruz de cierre">
            </div>
        </article>
    </section>
        `
    });
    

}
agregarCarrito();











// agregar el carrito de compras al localStorage
// cuando se ingrese a la pagina, chequear si el usuario dejo un carrito con productos previos. IF si hay productos en un carrito, renderizar ese carrito y sumarle los nuevos productos seleccionados, ELSE, empezar a pushear productos a un carrito nuevo 