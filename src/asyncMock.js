const products = [
  {
    id: "1",
    name: "Assasins Creed Valhalla",
    price: 12000,
    category: "Aventura",
    img: "https://product.takwene.com/Files/Catalog/Products/13074/photo_4baec025-cfdd-4778-9749-c5555f0f259c.jpg",
    front: "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6ZAlQrGYxXi8Bo8PuhJd5g/206c57ecb27e58b4555089c6c80d3db5/ACV_meta.png",
    stock: 8,
    title: "Crea tu propia leyenda vikinga",
    description: "Conviértete en Eivor, un poderoso saqueador vikingo y lidera a tu clan desde las inclementes costas de Noruega a un nuevo hogar en medio de las exuberantes tierras de cultivo de la Inglaterra del siglo IX. Explora un hermoso y misterioso mundo abierto donde te enfrentarás a brutales enemigos, saquearás fortalezas, construirás el nuevo asentamiento de tu clan y forjarás alianzas para conseguir la gloria y obtener un lugar en el Valhalla. Inglaterra, en la época de los vikingos, es una nación fracturada llena de amos mezquinos y reinos en guerra. Debajo de todo el caos yace una tierra salvaje y llena de abundancia que espera a un nuevo conquistador. ¿Serás tú?"
  },

  {
    id: "2",
    name: "Fifa 23",
    price: 19000,
    category: "Deportes",
    img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/159/532/products/fifa-2311-4c64d8d79b1e13a9ce16607617972486-640-0.jpg",
    front: "https://media.tycsports.com/files/2022/07/19/454313/fifa-23-portada_1440x810_wmk.webp",
    stock: 5,
    title: "The world's game",
    description: "FIFA es el videojuego de fútbol más vendido de la actualidad y con más de 25 años de desarrollo. Vas a poder jugar con tus equipos y futbolistas preferidos en diversos modos. ¡Preparate para convertirte en campeón de todas las copas y torneos!. Interactuá con otros jugadores. Podrás disfrutar de una experiencia inigualable, ya que te permite jugar con tus amistades y compartir momentos inolvidables. Diversión sin fronteras. Podrás compartir cada juego con personas de todo el mundo, ya que es posible conectarse de manera online."
  },

  {
    id: "3",
    name: "Demons Souls",
    price: 15000,
    category: "Aventura",
    img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2020/09/demons-souls-remake-2060481.jpg?itok=39iPy0qN",
    front: "https://media.vandal.net/i/640x360/11-2020/2020111410211158_1.jpg",
    stock: 17,
    title: "Experimenta una inquietante historia y el combate despiadado de Demon’s Souls",
    description: "Completamente rediseñada, esta nueva versión te invita a experimentar una inquietante historia y el combate despiadado de Demon’s Souls. En su búsqueda de poder, el 12.º rey de Boletaria, el rey Allant canalizó las antiguas artes del arma, despertando a un demonio desde los albores del tiempo mismo, el Antiguo. Con la invocación del Antiguo, una niebla sin color barrió por la tierra, desatando criaturas pesadillescas con hambre de almas humanas. Aquellos a los que les arrancaron las almas perdieron el juicio, y solo les quedó el deseo de atacar a los cuerdos restantes."
  },

  {
    id: "4",
    name: "Grand Therf Auto V",
    price: 13000,
    category: "Aventura",
    img: "https://media.vandal.net/m/86443/grand-theft-auto-v-202011241432933_1.jpg",
    front: "https://images7.alphacoders.com/439/439636.jpg",
    stock: "13",
    title: "Te damos la bienvenida a Los Santos",
    description: "Un joven estafador callejero, un ladrón de bancos retirado y un psicópata aterrador se ven involucrados con lo peor y más desquiciado del mundo criminal, del gobierno de los EE. UU. y de la industria del espectáculo, y tendrán que llevar a cabo una serie de peligrosos golpes para sobrevivir en una ciudad implacable en la que no pueden confiar en nadie. Y mucho menos los unos en los otros. Los jugadores actuales pueden transferir su progreso del modo Individual de GTA V y sus personajes y progresos de GTA Online a PlayStation®5 y Xbox Series X|S mediante una transferencia única"
  },

  {
    id: "5",
    name: "Mortal kombat 11",
    price: 15000,
    category: "Accion",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJr_fchED5cGkG5WFOPs4foN9FQimgxLj07wWXqtFUxmisWPFaYZDW-ArB2nXFmNysi4M&usqp=CAU",
    front: "https://compass-ssl.xbox.com/assets/a4/2f/a42ff3fd-cba2-4abb-a15c-4065f76cb525.jpg?n=Mortal-Kombat-11_GLP-Page-Hero-0_1083x609_02.jpg",
    stock: "9",
    title: "Un mundo de dolor aguarda",
    description: "Entra en una nueva era de kombate con la 11.ª entrega de la emblemática serie de lucha y desvela las consecuencias de las acciones de Raiden, que se remontan a los albores de la violenta saga. Sé testigo de la manipulación del tiempo con nuevos personajes con el poder de dar un vuelco al curso de la batalla, ganando unos preciosos segundos para sacar ventaja. Guerreros curtidos se enfrentan a versiones antiguas de sí mismos, los temblores del tiempo agitan las partidas y te cuestionarás todo lo que sabes acerca de Mortal Kombat a medida que la fuerza todopoderosa que mueve los hilos del brutal torneo se revela."
  },

  {
    id: "6",
    name: "Call of duty vanguard",
    price: 13500,
    category: "Shooter",
    img: "https://playtecgames.com/wp-content/uploads/2021/09/Call-of-Duty-Vanguard-PS5.jpg",
    front: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/vgd/VGD-MERCENARIES-OF-FORTUNE-Gun-Game-TOUT.jpg",
    stock: "6",
    title: "Álzate en todos los frentes en la más reciente entrega de la aclamada saga Call of Duty.",
    description: "Durante años, el mundo ha soportado la guerra más grande y mortal nunca vista, pero la balanza de la II Guerra Mundial por fin está dando la vuelta. Ahora unos pocos elegidos deben alzarse para completar el trabajo y cambiar el panorama de la guerra para siempre. Combinando realidad con ficción, Call of Duty es un juego único por su calidad de desarrollo. Su objetivo es que cada jugador logre conquistar todas las misiones, ya sea en una batalla contra otros ejércitos o combatiendo zombies. Sus gráficos, jugabilidad, desafíos e historias han hecho de la franquicia una de las más destacadas dentro de los videojuegos en primera persona."
  },

  {
    id: "7",
    name: "Gran Turismo 7",
    price: 17000,
    category: "Deportes",
    img: "https://media.vandal.net/m/86452/gran-turismo-7-202011241441619_1.jpg",
    front: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2022/3/10/ebnfy4qkra6zslwnqyoz/gran-turismo-7-ajustes-configuracion",
    stock: "10",
    title: "Gran Turismo 7 combina las mejores funciones del simulador de conducción real.",
    description: "Si eres piloto competitivo o casual, coleccionista, aficionado a las modificaciones, diseñador de apariencias o fotógrafo, encuentra tu camino con una colección impresionante de modos de juego, incluidos los favoritos de los fanáticos, como Campaña de GT, Arcade y Escuela de manejo. Gracias a la reincorporación del legendario modo Simulación de GT, puedes comprar y modificar autos, correr con ellos y venderlos en campañas individuales, a medida que desbloqueas nuevos autos y desafíos. Y si te gusta enfrentarte cabeza a cabeza con otros, perfecciona tus habilidades y compite en el modo Sport."
  },

  {
    id: "8",
    name: "Horizon Forbidden West",
    price: 15000,
    category: "Accion",
    img: "https://media.vandal.net/m/86450/horizon-2-forbidden-west-20201124144437_1.jpg",
    front: "https://gcdn.lanetaneta.com/wp-content/uploads/2021/05/Se-revela-la-jugabilidad-de-New-Horizon-Forbidden-West-para.jpeg",
    stock: "9",
    title: "Únete a Aloy mientras desafía el Oeste Prohibido, donde se ocultan nuevas y misteriosas amenazas",
    description: "Explora tierras remotas, enfréntate a máquinas más grandes e imponentes y descubre increíbles tribus en tu regreso a un futuro lejano en el mundo apocalíptico de Horizon. La tierra se muere. Las rugientes tormentas y una desolación imparable causan estragos entre lo que queda de la humanidad, unas cuantas tribus dispersas, mientras nuevas y temibles máquinas merodean por sus fronteras. La vida en la Tierra se enfrenta a una nueva extinción y nadie sabe por qué."
  },

  {
    id: "9",
    name: "Dying Light",
    price: 13000,
    category: "Aventura",
    img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/159/532/products/dying-light-2-stay-human-deluxe-edition1-8562bdf786ad03288916457607889278-640-0.jpg",
    front: "https://depor.com/resizer/LLbkSpkhpJrDqy-q1sybPgFNlVc=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/CQ4RFXF7OFBNDHD4YIY6OXQ4HE.jpg",
    stock: "18",
    title: "Utiliza tu agilidad y habilidades de combate y cambia el destino de la Ciudad.",
    description: "Hace más de 20 años, en Harran, luchamos contra el virus; y perdimos. Ahora, estamos perdiendo de nuevo. La Ciudad, uno de los asentamientos humanos más grandes, está devastada por el conflicto. La civilización cayó de vuelta a la Edad Oscura. Y sin embargo, aún tenemos esperanza. En Dying Light 2, la supervivencia se une a las aventuras de acción mientras tratas de resistir a un mundo hostil postapocalíptico. Las facciones rivales en la Ciudad no son el único enemigo; un virus ha convertido a la amplia mayoría de la población humana en monstruos. "
  },

  {
    id: "10",
    name: "Guardians Of The Galaxy",
    price: 13000,
    category: "Accion",
    img: "https://albeerc.github.io/Proyecto-PS5/img/juego11.png",
    front: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2021/06/marvel-guardians-galaxy-2385093.jpg?itok=J89TXLYN",
    stock: "14",
    title: "Ponte en la piel de Star-Lord en una aventura fuera de este mundo de Eidos-Montréal.",
    description: "Enciende las botas jet de Star-Lord para un viaje salvaje a través del cosmos en este juego de acción y aventura en tercera persona, una nueva versión de Guardianes de la Galaxia de Marvel.  Con los imprevisibles Guardianes a su lado, ábrete paso de una situación explosiva a otra, con personajes originales e icónicos de Marvel atrapados en una lucha por el destino del universo. "
  },

  {
    id: "11",
    name: "Uncharted Collection",
    price: 13500,
    category: "Aventura",
    img: "https://albeerc.github.io/Proyecto-PS5/img/juego13.png",
    front: "https://as01.epimg.net/meristation/imagenes/2021/09/12/noticias/1631430105_340606_1631430186_noticia_normal.jpg",
    stock: "11",
    title: "¿Estás listo para ir en busca de tu fortuna?",
    description: "Busca tu legado y deja tu marca en el mapa en UNCHARTED: Colección Legado de ladrones. Disfruta de los escenarios de acción cinematográfica y de la emocionante experiencia de juego de alto impacto de la icónica franquicia de Naughty Dog. Descubre la historia perdida con los carismáticos, aunque complejos, ladrones, Nathan Drake y Chloe Frazer, mientras viajan por el mundo con un sentido de curiosidad en busca de aventuras extraordinarias y la historia perdida."
  },

  {
    id: "12",
    name: "Sniper Ghost Warrior",
    price: 12000,
    category: "Shooter",
    img: "https://playtecgames.com/wp-content/uploads/2021/09/Sniper-Ghost-Warrior-Contracts-2.jpg",
    front: "https://img.zonared.com/images/analisis/portada/2000/2751-h.jpg",
    stock: "11",
    title: "Conviértete en el asesino perfecto en el juego de francotiradores militar más realista del mercado.",
    description: "Vive una intensa campaña para un jugador con grandes mapas abiertos. Necesitarás dotes tácticas, un enfoque sigiloso y precisión en los disparos de largo alcance. Contratos abiertos - Las recompensas y los desafíos proporcionan más motivos para rejugar. Elimina a tus objetivos e invierte el dinero que recibes en mejoras."
  },
]


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500)
  })
}


export const getProductById = (id) => {
  return new Promise (resolve => {
      setTimeout(() => {
          resolve(products.find(prod => {
              return prod.id === id
          }))
      }, 500)
  })
}


export const getProductsByCategory = (categoryId) => {
  return new Promise (resolve => {
      setTimeout(() => {
          resolve(products.filter(prod => prod.category === categoryId))
      }, 500)
  })
}