/*
Implementar una función que identifique a los clientes "VIP" (aquellos que han
gastado más de $1,000,000 en total). (2 Puntos)
La función debe retornar un array con los objetos de los clientes VIP, incluyendo el
monto total de sus compras.
Hint: Utiliza reduce(), filter() y map()
*/

//Importa desde ./ejercicio1.js los objetos productos, ventas y clientes para ser procesados por las funciones.
import { productos, ventas, clientes } from './ejercicio1.js';

/*
==================Función ventasPorCliente==================
Genera el listado del objeto ventas, agrega la columna precio desde el objeto productos, 
y agrega en la columna total el calculo entre cantidadVendida del producto * precio del producto.
- Usa el operador de propagación (...) para copiar todas las propiedades del objeto ventas al nuevo objeto venta, y 
  le agrega las columnas precio y total.
- La columna total es el producto de venta.cantidadVendida por el precio del producto.

Example:
┌─────────┬─────────┬────────────┬─────────────────┬──────────────┬───────────┬────────┬──────────┐
│ (index) │ idVenta │ idProducto │ cantidadVendida │ fechaVenta   │ idCliente │ precio │ total    │
├─────────┼─────────┼────────────┼─────────────────┼──────────────┼───────────┼────────┼──────────┤
│ 0       │ 1       │ 1          │ 5               │ '2024-01-01' │ 1         │ 300000 │ 1500000  │
│ 1       │ 2       │ 2          │ 3               │ '2024-02-01' │ 2         │ 200000 │ 600000   │
│ 2       │ 3       │ 3          │ 8               │ '2024-03-01' │ 1         │ 80000  │ 640000   │

*/
const ventasPorCliente = ventas.map(venta => { 
    //Encuentra el producto por el idProducto en la venta actual venta.idProducto
    const producto = productos.find(p => p.idProducto === venta.idProducto)
    //Si encuentra el objeto producto, obtiene su precio, de lo contrario su precio es 0
    const precio = producto ? producto.precio : 0;
    //Calcula el total de la venta actual, multiplicando la venta.cantidadVendida por el precio del producto.
    const total = venta.cantidadVendida * precio;
    //Retorna un nuevo objeto que incluye los atributos de venta (con el operadorador de propagación),
    //y las columnas precio y total.
    return { 
        ...venta, 
        precio: precio,
        total: total
    };
});
//console.table(ventasPorCliente) // Imprime la tabla ventas por cliente


/*
==================Función resumenPorCliente==================
Reduce el resultado de ventasPorCliente al ID del cliente, su nombre, y el monto total de compras realizadas.
*/
const resumenPorCliente = ventasPorCliente.reduce((acumulado, venta) => {
    //Verifica si el cliente (mediante el idCliente) no está en el acumulado
    if (!acumulado[venta.idCliente]) {
        //Si el cliente no está en el acumulado, se agrega el nombre y un total inicial con valor 0.
        acumulado[venta.idCliente] = { 
            nombre: clientes.find(c => c.idCliente === venta.idCliente).nombre,
            total: 0
        };
    }
    //Saliendo del condicional, suma el total de la venta a el total acumulado del cliente.
    acumulado[venta.idCliente].total += venta.total;
    //Retorna el objeto que se va actualizando en cada iteración.
    return acumulado;
}, {});


/*
==================Función clientesVIP==================
Filtra el resultado por aquellos que han gastado más de $1,000,000 en total.
- Toma como valor la salida de la función resumenPorClient
*/
export const clientesVIP = ()=>{ 
    //Convierte el objeto resultante de la función resumenPorCliente() en un array.
    const resultado = Object.values(resumenPorCliente)
    //Filtra los clientes que han gastado más de 1.000.000.
    .filter(cliente => cliente.total > 1000000)
    //Ordena los clientes que han gastado más de mayor a menor
    .sort((a,b)=> b.total - a.total);

    console.log("Clientes VIP\nResumen por cliente que han gastado más de $1M: ");
    console.table(resultado);
}

//clientesVIP() //Imprime tabla filtrado clientes que han gastado más de 1M.


