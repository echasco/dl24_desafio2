/*
Crear una función que calcule el total de ingresos por categoría de producto. (2
Puntos)
La función debe retornar un objeto donde las claves sean las categorías y los valores
sean el total de ingresos (precio * cantidad vendida) para esa categoría.
Hint: Utiliza los métodos reduce() y forEach()
*/

//Importa desde ./ejercicio1.js los objetos productos y ventas para ser procesados por las funciones.
import { productos, ventas } from './ejercicio1.js';
//Importa desde ./ejercicio2.js las funciones ventasPorProducto y productosVendidos para reutilizar su código.
import { ventasPorProducto, productosVendidos } from './ejercicio2.js';


/*
==================Función ventaPorCategoria==================
Genera tabla con la venta total agrupada por categoria, y ordenada por mayor cantidad de unidades vendidas.
- Usa la const resultado para almacenar la tabla y poder ser impresa desde la función.
- Reutiliza las funciones ventasPorProducto y productosVendidos desde ./ejercicio2.js

Example:
┌────────────────┬─────────────────┬──────────┐
│ (index)        │ cantidadVendida │ ganancia │
├────────────────┼─────────────────┼──────────┤
│ Hardware       │ 52              │ 9480000  │
│ Computadores   │ 38              │ 23400000 │
│ Almacenamiento │ 10              │ 1500000  │
│ Periféricos    │ 20              │ 1090000  │
│ Impresoras     │ 2               │ 400000   │
└────────────────┴─────────────────┴──────────┘

*/
export const ventaPorCategoria = (productosVendidos)=> {
    const resultado = productosVendidos.reduce((acumulado,venta)=>{
    //Verifica si categoria no existe en el parametro acumulado. Si no existe, la inicializa con un objeto {}
    //que tiene cantidadVendida y ganancia en valores 0
    if (!acumulado[venta.categoria]) 
        { acumulado[venta.categoria] = { cantidadVendida: 0, ganancia: 0 }; }
    //Agrega a cantidadVendida (del acumulado) la cantidad vendida en la venta actual.
        acumulado[venta.categoria].cantidadVendida += venta.cantidadVendida;
    //Agrega a ganancia (del acumulado) el producto del precio de la venta por la cantidad vendida.
        acumulado[venta.categoria].ganancia += venta.precio*venta.cantidadVendida;
    //retorna el acumulado
        return acumulado
    },
   {})
    console.log("Ventas por categoria: ") 
    console.table(resultado) //Imprime la tabla con lo que se almaceno en la variable resultado
}
//ventaPorCategoria(productosVendidos(productos,ventasPorProducto(ventas))) //Imprime tabla con categoria de los produtos, la cantidad vendida y el total vendido.

