const productData = [
    {
        id: 1,
        name:"Sillon KIVIK",
        img: <img src="/sillon.png" alt="sillon1" />,
        productType: "sillon",
        price: 335.9840,
        descr: "Roble tallado y terciopelo suave, detalles ornamentados, cojín de alta densidad, elegancia atempora"
    },
    {
        id: 2,
        name:"Sillon EKTORP",
        img: "https://www.ikea.com/it/it/images/products/ektorp-divano-a-2-posti-totebo-beige-chiaro__0818548_pe774479_s5.jpg?f=l",
        productType: "sillon",
        price: 883.284,
        descr: "Líneas limpias, acero inoxidable, cuero neutro, estilo y comodidad funcional, sin excesos.",
    },
    {
        id: 3,
        name:"Sillon LINÄNAS",
        img: "https://www.ikea.com/it/it/images/products/linanaes-divano-a-3-posti-vissle-grigio-scuro__1013899_pe829451_s5.jpg?f=xl",
        productType: "sillon",
        price: 665.979,
        descr:"Descanso inigualable, espuma memoria, reclinación eléctrica, piel envejecida, sofisticación con detalles contrastantes.",
    },
    {
        id: 4,
        name:"Sillon KLIPPAN",
        img:"https://www.ikea.com/it/it/images/products/klippan-divano-a-2-posti-vissle-verde-limone__1058004_ph182208_s5.jpg?f=l",
        productType: "sillon",
        price: 935.9840,
        descr:"Tapizado algodón, estampados étnicos, colores vibrantes, madera natural rústica, asiento relajado y suelto.",
    },
    {
        id: 5,
        name:"Sillon PARUP",
        img: "https://www.ikea.com/it/it/images/products/paerup-divano-a-2-posti-vissle-verde-scuro__0986563_pe817210_s5.jpg?f=l",
        productType: "sillon",
        price: 382.212,
        descr:"Soporte lumbar, malla transpirable, inclinación, diseño contemporáneo, comodidad y productividad en casa.",
    },
    {
        id: 6,
        name:"Sillon GRÖNLID",
        img: "https://www.ikea.com/it/it/images/products/groenlid-divano-a-3-posti-inseros-bianco__0641527_ph149214_s5.jpg?f=l",
        productType: "sillon",
        price: 468.979,
        descr:"Diseño nórdico, líneas y patas de madera cónicas, tapizado tela neutra, funcional y acogedor.",
    },
];

export const getProductsById = (id)=>{
    return new Promise((resolve) =>{
      setTimeout(()=>{
        resolve(productData.find(prod => prod.id === parseInt(id)))
      })
    })}

export default productData;