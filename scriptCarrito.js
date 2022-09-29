// MOSTRAR EL PRECIO SEGÚN EL ARTICULO SELECCIONADO 
let precioSilla = 28000
let precioButaca = 23000
let precioAlfombra = 15000
let precioRespaldo = 28000


const saberPrecio = () => {

    let producto = prompt("Ingrese el producto que quisiera seleccionar (silla, butaca, alfombra o respaldo) para indicarle el valor del mismo")
    
    switch (producto.toLowerCase()) {
        case "silla":
            alert("El valor de la silla seleccionada es de $"+precioSilla);
            break;
    
        case "butaca":
            alert("El valor de la butaca seleccionada es de $"+precioButaca);
            break;
        
        case "alfombra":
            alert("El valor de la alfombra seleccionada es de $"+precioAlfombra);
    
        case "respaldo":
            alert("El valor del respaldo seleccionado es de $"+precioRespaldo);
            break;
    
        default:
            alert("Disculpe, el producto ingresado es incorrecto. Escriba de manera correcta el producto que desea agregar a su carrito");
    }
}
saberPrecio();


// MOSTRAR EL PRECIO DEL PRODUCTO 
// let descuento = prompt("Ingrese el medio de pago (efectivo, transferencia o tarjeta de crédito")
