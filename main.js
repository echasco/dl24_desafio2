import { productos, ventas, clientes } from './ejercicio1.js';
import { productosVendidos, ventasPorProducto, productosMasVendidos } from './ejercicio2.js';
import { ventaPorCategoria } from './ejercicio3.js';
import { clientesVIP } from './ejercicio4.js';
import { generarReporteInventario } from './ejercicio5.js';


//Ejercicio 1
console.log("Tabla productos")
console.table(productos)

console.log("Tabla ventas")
console.table(ventas)

console.log("Tabla clientes")
console.table(clientes)

//Ejercicio 2
productosMasVendidos(productosVendidos(productos,ventasPorProducto(ventas)))

//Ejercicio 3
ventaPorCategoria(productosVendidos(productos,ventasPorProducto(ventas)))

//Ejercicio 4
clientesVIP()

//Ejercicio 5
generarReporteInventario()