/*
Crear las estructuras de datos necesarias utilizando objetos JSON para representar
productos, ventas y clientes. (2 Puntos)
Debes crear tres arrays: productos, ventas, y clientes, cada uno con al menos 10
elementos de ejemplo.
*/

// Productos
export const productos = [
    { idProducto: 1, nombre: "Tarjeta Gráfica", precio: 300000, categoria: "Hardware", stock: 13 },
    { idProducto: 2, nombre: "CPU", precio: 200000, categoria: "Hardware", stock: 15 },
    { idProducto: 3, nombre: "Memoria RAM", precio: 80000, categoria: "Hardware", stock: 10 },
    { idProducto: 4, nombre: "Notebook", precio: 500000, categoria: "Computadores", stock: 45 },
    { idProducto: 5, nombre: "Computador", precio: 700000, categoria: "Computadores", stock: 20 },
    { idProducto: 6, nombre: "Disco Duro SSD", precio: 150000, categoria: "Almacenamiento", stock: 73 },
    { idProducto: 7, nombre: "Teclado Mecánico", precio: 50000, categoria: "Periféricos", stock: 5 },
    { idProducto: 8, nombre: "Monitor", precio: 250000, categoria: "Periféricos", stock: 11 },
    { idProducto: 9, nombre: "Mouse", precio: 30000, categoria: "Periféricos", stock: 19 },
    { idProducto: 10, nombre: "Cámara Web", precio: 45000, categoria: "Periféricos", stock: 33 },
    { idProducto: 11, nombre: "Micrófono", precio: 60000, categoria: "Periféricos", stock: 37 },
    { idProducto: 12, nombre: "Auriculares", precio: 90000, categoria: "Periféricos", stock: 88 },
    { idProducto: 13, nombre: "Placa Madre", precio: 180000, categoria: "Hardware", stock: 91 },
    { idProducto: 14, nombre: "Fuente de Poder", precio: 100000, categoria: "Hardware", stock: 18 },
    { idProducto: 15, nombre: "Refrigeración Líquida", precio: 120000, categoria: "Hardware", stock: 7 },
    { idProducto: 16, nombre: "Impresora Laser Color", precio: 200000, categoria: "Impresoras", stock: 22 }
];
// Ventas
export const ventas  = [
    { idVenta: 1, idProducto: 1, cantidadVendida: 5, fechaVenta: '2024-01-01', idCliente: 1 },
    { idVenta: 2, idProducto: 2, cantidadVendida: 3, fechaVenta: '2024-02-01', idCliente: 2 },
    { idVenta: 3, idProducto: 3, cantidadVendida: 8, fechaVenta: '2024-03-01', idCliente: 1 },
    { idVenta: 4, idProducto: 4, cantidadVendida: 2, fechaVenta: '2024-04-01', idCliente: 4 },
    { idVenta: 5, idProducto: 5, cantidadVendida: 7, fechaVenta: '2024-05-01', idCliente: 5 },    
    { idVenta: 6, idProducto: 6, cantidadVendida: 10, fechaVenta: '2024-06-01', idCliente: 3 },
    { idVenta: 7, idProducto: 7, cantidadVendida: 9, fechaVenta: '2024-07-01', idCliente: 7 },
    { idVenta: 8, idProducto: 8, cantidadVendida: 1, fechaVenta: '2024-08-01', idCliente: 2 },
    { idVenta: 9, idProducto: 9, cantidadVendida: 4, fechaVenta: '2024-09-01', idCliente: 9 },
    { idVenta: 10, idProducto: 10, cantidadVendida: 6, fechaVenta: '2024-10-01', idCliente: 8 },
    { idVenta: 11, idProducto: 1, cantidadVendida: 11, fechaVenta: '2024-11-01', idCliente: 11 },
    { idVenta: 12, idProducto: 2, cantidadVendida: 12, fechaVenta: '2024-12-01', idCliente: 7 },
    { idVenta: 13, idProducto: 3, cantidadVendida: 13, fechaVenta: '2024-12-02', idCliente: 13 },
    { idVenta: 14, idProducto: 4, cantidadVendida: 14, fechaVenta: '2024-12-03', idCliente: 9 },
    { idVenta: 15, idProducto: 5, cantidadVendida: 15, fechaVenta: '2024-12-04', idCliente: 15 },
    { idVenta: 16, idProducto: 16, cantidadVendida: 2, fechaVenta: '2024-12-05', idCliente: 6 },
];

// Clientes
export const clientes = [
    { idCliente: 1, nombre: "Juan Pérez", email: "juan.perez@gmail.com" },
    { idCliente: 2, nombre: "María González", email: "maria.gonzalez@outlook.com" },
    { idCliente: 3, nombre: "Pedro Hernández", email: "pedro.hernandez@yahoo.com" },
    { idCliente: 4, nombre: "Lucía Martínez", email: "lucia.martinez@gmail.com" },
    { idCliente: 5, nombre: "Carlos Ramírez", email: "carlos.ramirez@outlook.com" },
    { idCliente: 6, nombre: "Ana López", email: "ana.lopez@yahoo.com" },
    { idCliente: 7, nombre: "Javier Torres", email: "javier.torres@gmail.com" },
    { idCliente: 8, nombre: "Sofía Díaz", email: "sofia.diaz@outlook.com" },
    { idCliente: 9, nombre: "Andrés Morales", email: "andres.morales@yahoo.com" },
    { idCliente: 10, nombre: "Camila Fernández", email: "camila.fernandez@gmail.com" },
    { idCliente: 11, nombre: "Felipe Castro", email: "felipe.castro@outlook.com" },
    { idCliente: 12, nombre: "Daniela Vargas", email: "daniela.vargas@yahoo.com" },
    { idCliente: 13, nombre: "Ricardo Silva", email: "ricardo.silva@gmail.com" },
    { idCliente: 14, nombre: "Gabriela Rojas", email: "gabriela.rojas@outlook.com" },
    { idCliente: 15, nombre: "Francisco Reyes", email: "francisco.reyes@yahoo.com" },
];