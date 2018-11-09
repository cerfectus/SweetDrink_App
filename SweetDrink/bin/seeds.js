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
    name : "Modelo especial",
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
    Qty: "700ml",
    price: 250.00
  },
  {
    image: "https://bodegasalianza.vteximg.com.br/arquivos/ids/164143-800-800/30022-1.jpg?v=636588733158930000",
    name : "Torres spiced",
    type: "Brandy",
    Qty: "990ml",
    price: 200.00
  },
  {
    image: "https://bodegasalianza.vteximg.com.br/arquivos/ids/159778-1000-1000/0063-1.jpg?v=636347883107370000",
    name : "Azteca de oro",
    type: "Brandy",
    Qty: "700ml",
    price: 145.00
  }
];

const ron = [
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/20.jpg",
    name : "Appleton Estate V/X",
    type: "Ron",
    Qty: "750ml",
    price: 315.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/2.jpg",
    name : "Bacardi Bco. (Pat)",
    type: "Ron",
    Qty: "1.75 lt",
    price: 345.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/1.jpg",
    name : "Bacardi Bco.",
    type: "Ron",
    Qty: "1 lt",
    price: 250.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/10.jpg",
    name : "Captain Morgan",
    type: "Ron",
    Qty: "750ml",
    price: 200.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/16.jpg",
    name : "Kraken",
    type: "Ron",
    Qty: "1 lt",
    price: 235.00
  }
];

const vodka = [
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/34.jpg",
    name : "Absolut Azul",
    type: "Vodka",
    Qty: "750ml",
    price: 345.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/38.jpg",
    name : "Grey Goose",
    type: "Vodka",
    Qty: "700ml",
    price: 850.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/37.jpg",
    name : "Smirnoff.",
    type: "Vodka",
    Qty: "1 lt",
    price: 280.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/598.jpg",
    name : "Smirnoff Tamarindo",
    type: "Vodka",
    Qty: "750ml",
    price: 245.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/39.jpg",
    name : "Stolichnaya",
    type: "Vodka",
    Qty: "750ml",
    price: 360.00
  }
];
const whiskey = [
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/87.jpg",
    name : "Buchanans",
    type: "Whiskey",
    Qty: "700ml",
    price: 795.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/83.jpg",
    name : "Chivas Regal",
    type: "Whiskey",
    Qty: "750ml",
    price: 725.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/85.jpg",
    name : "J.W. Etiqueta Neg.",
    type: "Whiskey",
    Qty: "750ml",
    price: 840.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/84.jpg",
    name : "J.W. Etiqueta Roja",
    type: "Whiskey",
    Qty: "750ml",
    price: 385.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/86.jpg",
    name : "Jack Daniels",
    type: "Whiskey",
    Qty: "700ml",
    price: 485.00
  }
];
const ginebra = [
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/596.jpg",
    name : "BEEFEATER",
    type: "Ginebra",
    Qty: "700ml",
    price: 525.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/174.jpg",
    name : "Bombay Shapphire",
    type: "Ginebra",
    Qty: "700ml",
    price: 580.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/179.jpg",
    name : "Hendricks",
    type: "Ginebra",
    Qty: "750ml",
    price: 845.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/595.jpg",
    name : "TANQUERAY",
    type: "Ginebra",
    Qty: "750ml",
    price: 490.00
  },
  {
    image: "https://bodegasalianza.vteximg.com.br/arquivos/ids/158159-1000-1000/26714-1.jpg?v=636162013367830000",
    name : "Thomas Dakin",
    type: "Ginebra",
    Qty: "700ml",
    price: 550.00
  }
];
const mezclador = [
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/69.jpg",
    name : "Agua Mineral",
    type: "Mezclador",
    Qty: "2 lt",
    price: 40.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/70.jpg",
    name : "Agua Natural Ciel ",
    type: "Mezclador",
    Qty: "1.5 lt",
    price: 25.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/71.jpg",
    name : "Agua Quina",
    type: "Mezclador",
    Qty: "6 pack",
    price: 85.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/73.jpg",
    name : "B:oost",
    type: "Mezclador",
    Qty: "120ml",
    price: 40.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/63.jpg",
    name : "Coca-Cola",
    type: "Mezclador",
    Qty: "2 lt",
    price: 40.00
  }
];
const jugos = [
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/131.jpg",
    name : "Clamato",
    type: "Jugos",
    Qty: "1 lt",
    price: 55.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/130.jpg",
    name : "Jugo de Arandano",
    type: "Jugos",
    Qty: "1 lt",
    price: 45.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/127.jpg",
    name : "Jugo de Naranja ",
    type: "Jugos",
    Qty: "1 lt",
    price: 40.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/129.jpg",
    name : "Jugo de Piña",
    type: "Jugos",
    Qty: "1 lt",
    price: 40.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/128.jpg",
    name : "Jugo de uva",
    type: "Jugos",
    Qty: "1 lt",
    price: 40.00
  }
];
const Botana = [
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/97.jpg",
    name : "Burrito",
    type: "Botana",
    Qty: "2 pzas",
    price: 48.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/115.jpg",
    name : "Golden Nuts Enchilados",
    type: "Botana",
    Qty: "300g",
    price: 40.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/113.jpg",
    name : "Golden Nuts Japoneses",
    type: "Botana",
    Qty: "250g",
    price: 40.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/114.jpg",
    name : "Jugo de Piña",
    type: "Botana",
    Qty: "250g",
    price: 40.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/96.jpg",
    name : "Palomitas ACTII",
    type: "Botana",
    Qty: "1 pza",
    price: 25.00
  }
];
const cigarros = [
  {
    image: "https://www.villagem.com/image/cache/data/items/2820000357-800x800.jpg",
    name : "Marlboro rojos",
    type: "Cigarros",
    Qty: "20 pzas",
    price: 77.00
  },
  {
    image: "https://www.sfroomservices.com/wp-content/uploads/2017/12/original-1549.jpeg",
    name : "Marlboro blancos",
    type: "Cigarros",
    Qty: "20 pzas",
    price: 77.00
  },
  {
    image: "http://www.cellshop.com/v2/744487-large_default/cigarrillos-marlboro-ice-blast--20-unidades-.jpg",
    name : "Marlboro ICE",
    type: "Cigarros",
    Qty: "20 pzas",
    price: 77.00
  },
  {
    image: "https://jumbocolombiafood.vteximg.com.br/arquivos/ids/226235-1000-1000/7702303004619-1.jpg?v=636307122639470000",
    name : "Lucky Strike",
    type: "Cigarros",
    Qty: "20 pzas",
    price: 77.00
  },
  {
    image: "http://cervezadomicilio.com/77-large_default/cigarros-camel-20s.jpg",
    name : "Camel",
    type: "Cigarros",
    Qty: "20 pzas",
    price: 77.00
  }
];
const farmacia = [
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/134.jpg",
    name : "Alka-Seltzer",
    type: "Farmacia",
    Qty: "12 pzas",
    price: 80.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/133.jpg",
    name : "Aspirina",
    type: "Farmacia",
    Qty: "40 pzas",
    price: 90.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/137.jpg",
    name : "Condones Playboy",
    type: "Farmacia",
    Qty: "3 pack",
    price: 100.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/135.jpg",
    name : "Pepto-Bismol",
    type: "Farmacia",
    Qty: "24 pzas",
    price: 120.00
  },
  {
    image: "https://super.walmart.com.mx/images/product-images/img_large/00750221498357L.jpg",
    name : "Prudence caribbean",
    type: "Farmacia",
    Qty: "5 pack",
    price: 120.00
  }
];
const juegos = [
  {
    image: "https://media.takealot.com/covers_tsins/49931529/49931529-1-zoom.jpg",
    name : "BEER PONG",
    type: "Juegos y más",
    Qty: "18 VASOS 18 PELOTAS",
    price: 80.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/193.jpg",
    name : "Ramo de Rosas",
    type: "Juegos y más",
    Qty: "",
    price: 490.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/192.jpg",
    name : "Peluche",
    type: "Juegos y más",
    Qty: "30 cm",
    price: 380.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/602.jpg",
    name : "Ferrero Rocher",
    type: "Juegos y más",
    Qty: "8 pzas",
    price: 135.00
  },
  {
    image: "https://p.globalsources.com/IMAGES/PDT/BIG/809/B1146830809.jpg",
    name : "Dados amorosos",
    type: "Juegos y más",
    Qty: "2 pzas",
    price: 70.00
  }
];
const servicio = [
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/153.jpg",
    name : "Hielo",
    type: "Servicios",
    Qty: "5kg",
    price: 45.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/151.jpg",
    name : "Platos",
    type: "Servicios",
    Qty: "25 pzas",
    price: 45.00
  },
  {
    image: "https://sistema.vampiritos.com/pos/img/productos/152.jpg",
    name : "Vasos",
    type: "Servicios",
    Qty: "20 pzas",
    price: 45.00
  },
  {
    image: "http://industrialbaena.com/500-large_default/encendedor-piedra.jpg",
    name : "Encendedor",
    type: "Servicios",
    Qty: "1 pza",
    price: 20.00
  },
  {
    image: "http://www.suministrosjjm.com/wp-content/uploads/2016/05/bolsas_plastica_negras.jpg",
    name : "Bolsa de basura",
    type: "Servicios",
    Qty: "1 pza",
    price: 10.00
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
});
Producto.create(brandy, (err) => {
  if (err) throw(err)
  console.log(`Created ${brandy.length} Brandys`)
  // cerrar conexion a la BD
  mongoose.connection.close()
})
Producto.create(ron, (err) => {
  if (err) throw(err)
  console.log(`Created ${ron.length} Rones`)
  // cerrar conexion a la BD
  mongoose.connection.close()
})
Producto.create(vodka, (err) => {
  if (err) throw(err)
  console.log(`Created ${vodka.length} Vodkas`)
  // cerrar conexion a la BD
  mongoose.connection.close()
})
Producto.create(whiskey, (err) => {
  if (err) throw(err)
  console.log(`Created ${whiskey.length} Whiskeys`)
  // cerrar conexion a la BD
  mongoose.connection.close()
})
Producto.create(ginebra, (err) => {
  if (err) throw(err)
  console.log(`Created ${ginebra.length} Ginebras`)
  // cerrar conexion a la BD
  mongoose.connection.close()
})
Producto.create(mezclador, (err) => {
  if (err) throw(err)
  console.log(`Created ${mezclador.length} Mezcladores`)
  // cerrar conexion a la BD
  mongoose.connection.close()
})
Producto.create(jugos, (err) => {
  if (err) throw(err)
  console.log(`Created ${jugos.length} Jugos`)
  // cerrar conexion a la BD
  mongoose.connection.close()
})*/
Producto.create(Botana, (err) => {
  if (err) throw(err)
  console.log(`Created ${Botana.length} Botanas`)
  // cerrar conexion a la BD
  mongoose.connection.close()
})
Producto.create(cigarros, (err) => {
  if (err) throw(err)
  console.log(`Created ${cigarros.length} Cigarros`)
  // cerrar conexion a la BD
  mongoose.connection.close()
})
Producto.create(farmacia, (err) => {
  if (err) throw(err)
  console.log(`Created ${farmacia.length} Farmacia`)
  // cerrar conexion a la BD
  mongoose.connection.close()
})
Producto.create(juegos, (err) => {
  if (err) throw(err)
  console.log(`Created ${juegos.length} Juegos`)
  // cerrar conexion a la BD
  mongoose.connection.close()
})
Producto.create(servicio, (err) => {
  if (err) throw(err)
  console.log(`Created ${servicio.length} Servicios`)
  // cerrar conexion a la BD
  mongoose.connection.close()
})