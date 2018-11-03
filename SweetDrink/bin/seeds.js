// Llamando dependecias
const mongoose = require('mongoose');
const Producto = require('../models/Producto');

// conexion con la BD
mongoose.connect('mongodb://ADMIN:Bacacho2018@ds141043.mlab.com:41043/sweet_drink', {useNewUrlParser: true});

// Datos de la BD
const cervezas = [
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/199.jpg",
    name : "Negra modelo",
    type: "cerveza",
    Qty: "6 pack",
    price: 135.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/53.jpg",
    name : "Modelo epecial",
    type: "cerveza",
    Qty: "6 pack",
    price: 125.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/181.jpg",
    name : "Corona light",
    type: "cerveza",
    Qty: "6 pack",
    price: 125.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/44.jpg",
    name : "Corona extra",
    type: "cerveza",
    Qty: "6 pack",
    price: 125.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/45.jpg",
    name : "Victoria",
    type: "cerveza",
    Qty: "6 pack",
    price: 125.00
  }
];

const vinos = [
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/592.jpg",
    name : "Casillero del Diablo Cabernet",
    type: "Vino de Mesa",
    Qty: "750",
    price: 290.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/148.jpg",
    name : "Concha y Toro Bco.",
    type: "Vino de Mesa",
    Qty: "750",
    price: 185.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/146.jpg",
    name : "Concha y Toro Cab. S.",
    type: "Vino de Mesa",
    Qty: "750",
    price: 185.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/147.jpg",
    name : "Concha y Toro Mer.",
    type: "Vino de Mesa",
    Qty: "750",
    price: 185.00
  },
  {
    image: "https://bodegasalianza.vteximg.com.br/arquivos/ids/159424-1000-1000/24710-1.jpg?v=636304626439900000",
    name : "Dolce amore ",
    type: "Vino de Mesa",
    Qty: "750",
    price: 185.00
  }
];

const tequila = [
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/28.jpg",
    name : "Azul Centenario",
    type: "Tequila",
    Qty: "700",
    price: 265.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/26.jpg",
    name : "Cazadores Reposado",
    type: "Tequila",
    Qty: "750",
    price: 335.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/22.jpg",
    name : "Cuervo Especial",
    type: "Tequila",
    Qty: "990",
    price: 245.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/607.jpg",
    name : "Cuervo Especial Silver",
    type: "Tequila",
    Qty: "990",
    price: 279.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/24.jpg",
    name : "Cuervo Tradicional",
    type: "Tequila",
    Qty: "950",
    price: 375.00
  }
];

const brandy = [
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/80.jpg",
    name : "Terry Centenario ",
    type: "Brandy",
    Qty: "700",
    price: 365.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/81.jpg",
    name : "Torres 10",
    type: "Brandy",
    Qty: "700",
    price: 340.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/593.jpg",
    name : "Torres 5",
    type: "Brandy",
    Qty: "700",
    price: 250.00
  },
  {
    image: "https://bodegasalianza.vteximg.com.br/arquivos/ids/164143-800-800/30022-1.jpg?v=636588733158930000",
    name : "Torres spiced",
    type: "Brandy",
    Qty: "990",
    price: 200.00
  },
  {
    image: "https://bodegasalianza.vteximg.com.br/arquivos/ids/159778-1000-1000/0063-1.jpg?v=636347883107370000",
    name : "Azteca de oro",
    type: "Brandy",
    Qty: "700",
    price: 145.00
  }
];

/*Producto.create(cervezas, (err) => {
  if (err) throw(err)
  console.log(`Created ${cervezas.length} cervezas`)
  // cerrar conexion a la BD
  mongoose.connection.close()
});
Producto.create(vinos, (err) => {
  if (err) throw(err)
  console.log(`Created ${vinos.length} vinos`)
  // cerrar conexion a la BD
  mongoose.connection.close()
});
Producto.create(tequila, (err) => {
  if (err) throw(err)
  console.log(`Created ${tequila.length} tequilas`)
  // cerrar conexion a la BD
  mongoose.connection.close()
});*/
Producto.create(brandy, (err) => {
  if (err) throw(err)
  console.log(`Created ${brandy.length} Brandys`)
  // cerrar conexion a la BD
  mongoose.connection.close()
})