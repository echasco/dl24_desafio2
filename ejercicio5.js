/*
Crear una función que genere un reporte de inventario. (2 Puntos)
Esta función debe retornar un array de objetos, donde cada objeto contiene el
nombre del producto, la categoría, el stock actual y un campo "status" que puede ser
"Low Stock" si el stock es menor a 10, "In Stock" si está entre 10 y 20, y "Enough
Stock" si es mayor a 20.
Hint: Utiliza map() y operadores ternarios o condicionales.
*/

import { productos, ventas } from './ejercicio1.js';

/*
==================Función generarReporteInventario==================
Crea un reporte del estado del inventario para cada producto, 
determinando si cada producto tiene bajo stock, stock suficiente o sobre stock.
*/
export const generarReporteInventario = () => {
    //Se crea la constante reporte para guardar el resultado del metodo map() sobre el 
    //objeto productos. Map crea un nuevo array con los resultados de aplicar una función 
    //a cada elemento del objeto productos
    const reporte = productos.map(producto => {
        //Se inicializa la variable status para guardar el estado que resultara del condicional IF
        let status = '';
        //Si el stock de producto es menor o igual a 10, guarda el status como "Low Stock"
        if (producto.stock <= 10) {
            status = 'Low Stock';
        //Si el stock de producto es mayor a 10 y menor a 20, guarda el status como "In Stock"
        } else if (producto.stock > 10 && producto.stock < 20) {
            status = 'In Stock';
        //Si el stock de producto es mayor o igual a 20, guarda el status como "Enough Stock"
        } else {
            status = 'Enough Stock';
        }
        // Retorna el objeto con los detalles del producto
        return {
            nombre: producto.nombre,
            categoria: producto.categoria,
            stock: producto.stock,
            status: status
        };
    });
    console.log("Reporte de Inventario: ");
    console.table(reporte)
};

//generarReporteInventario(); //Genera reporte de inventario
