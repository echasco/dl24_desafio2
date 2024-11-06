/*
Implementar una función que encuentre los 3 productos más vendidos. (2 Puntos)
Esta función debe usar los arrays productos y ventas, y retornar un array con los 3
productos (objetos completos) más vendidos en orden descendente por cantidad de
ventas.
Hint: Utiliza los métodos reduce(), sort() y map() de JavaScript. ).
*/


//Importa desde ./ejercicio1.js los objetos productos y ventas para ser procesados por las funciones.
import { productos, ventas } from './ejercicio1.js';


/*
==================Función ventasPorProducto==================
 Permite extraer la sumatoria de la cantidad que se ha vendido de cada producto.
- Reduce() va reduciendo el array hasta devolver un par de datos que sera el idProducto como indice, 
   y como value va haciendo la sumatoria del campo cantidadVendida de cada producto.
- acumulado: El acumulador que recoge las cantidades vendidas.
- venta: El objeto de la venta actual que se está procesando.
- || 0: si el valor es undefined o falsy, usa 0 en su lugar.

Example:
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 1       │ 16     │
│ 2       │ 15     │
│ 3       │ 21     │

*/
export const ventasPorProducto = (ventas) =>
    ventas.reduce((acumulado, venta) => 
    { acumulado[venta.idProducto] = (acumulado[venta.idProducto] || 0) + venta.cantidadVendida; 
        return acumulado; 
    }, 
    {}); // {} representa un objeto vacio que se usa como valor inicial para el acumulador de la función.
    
//console.table(ventasPorProducto(ventas)) //Imprimir tabla con cantidad vendida de cada producto.



/*
==================Función productosVendidos==================
Permite obtener el objeto completo Producto, y agregar la columna cantidadVendida, que se obtiene de la función anterior ventasPorProducto.
- Reutiliza la función ventasPorProducto.
- El operador de propagación (...) copia todas las propiedades del objeto producto al nuevo objeto que estamos creando.

Example:
┌─────────┬────────────┬─────────────────────────┬────────┬──────────────────┬───────┬─────────────────┐
│ (index) │ idProducto │ nombre                  │ precio │ categoria        │ stock │ cantidadVendida │
├─────────┼────────────┼─────────────────────────┼────────┼──────────────────┼───────┼─────────────────┤
│ 0       │ 1          │ 'Tarjeta Gráfica'       │ 300000 │ 'Hardware'       │ 13    │ 16              │
│ 1       │ 2          │ 'CPU'                   │ 200000 │ 'Hardware'       │ 15    │ 15              │
│ 2       │ 3          │ 'Memoria RAM'           │ 80000  │ 'Hardware'       │ 10    │ 21              │

*/
export const productosVendidos = (productos, ventasPorProducto) =>
    productos.map(producto => 
    { return { 
        //Va agregando la columna cantidadVendida, cuyo valor es el resultado de pasar el idProducto a la función ventasPorProducto.
        ...producto, cantidadVendida: ventasPorProducto[producto.idProducto] || 0 
             };
    });    
//console.table(productosVendidos(productos,ventasPorProducto(ventas))) //Imprimir tabla con productos y columna cantidadVendida.



/*
==================Función productoMasVendido==================
Ordena la tabla en orden descendente por cantidad vendida de producto y devuelve los 3 productos más vendidos.
- Reutiliza la función productosVendidos() como parametro de entrada
  productosVendidos(productos,ventasPorProducto(ventas)
- Utiliza sort() que realiza una función de comparación para determinar el orden.
- Usando slice(0,3) hace una copia de los 3 primeros elementos del array, sin considerar el indice 3.
*/
export const productosMasVendidos = (productosVendidos)=>{
    const productosOrdenados= (productosVendidos)=>{
        return productosVendidos.sort((a,b) => b.cantidadVendida - a.cantidadVendida);   
    }
    const resultado = productosOrdenados(productosVendidos)
    console.log("Top 3 productos más vendidos: ") 
    console.table(resultado.slice(0,3))
}
//productosMasVendidos(productosVendidos(productos,ventasPorProducto(ventas))) //Imprimir tabla con 3 productos más vendidos.