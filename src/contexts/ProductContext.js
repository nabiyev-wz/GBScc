import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "SEALUXE 30мл Глянцевый консилер — основа под макияж",
      thumbnail: "https://green-leaf.uz/wp-content/uploads/SEALUXE-30ml-Glyantsevyj-konsiler-300x300.png",
      price: 1000
    },
    {
      id: 2,
      title: "SEALUXE Консилер «Звезда»",
      thumbnail: "https://green-leaf.uz/wp-content/uploads/SEALUXE-Konsiler-300x300.png",
      price: 1000
    },
    {
      id: 3,
      title: "SEALUXE Маскирующая осветляющая база под макияж с эффектом сияющей кожи, 30 гр.",
      thumbnail: "https://green-leaf.uz/wp-content/uploads/SEALUXE-Maskiruyushhaya-osvetlyayushhaya-baza-pod-makiyazh-300x300.png",
      price: 1000
    }, {
      id: 4,
      title: "SEALUXE Жидкая подводка для глаз",
      thumbnail: "https://green-leaf.uz/wp-content/uploads/Sealuxe_ZHidkaya_podvodka_dlya_glaz-rect_2x-300x300.jpg",
      price: 1000
    }, {
      id: 5,
      title: "Антивозрастной компактный СС-кушон Greenleaf серия Sealuxe (цвет Ivory Beige), 2*15 гр.",
      thumbnail: "https://green-leaf.uz/wp-content/uploads/large_Kushon_CC.jpg",
      price: 1000
    }, {
      id: 6,
      title: "Sealuxe Жидкая губная помада",
      thumbnail: "https://green-leaf.uz/wp-content/uploads/pomada__matovaya_rozovaya-300x300.jpg",
      price: 1000
    }, {
      id: 7,
      title: "SEALUXE Маскирующая осветляющая база под макияж с эффектом смягчения кожи, 30 гр.",
      thumbnail: "https://green-leaf.uz/wp-content/uploads/SEALUXE-Maskiruyushhaya-osvetlyayushhaya-baza-300x300.png",
      price: 1000
    }, {
      id: 8,
      title: "Четырехцветные тени для век",
      thumbnail: "https://green-leaf.uz/wp-content/uploads/teni-dlya-vek-300x300.jpg",
      price: 1000
    }, {
      id: 9,
      title: "YIBEILE Детский пенящийся гель с аминокислотами, 300 мл",
      thumbnail: "https://green-leaf.uz/wp-content/uploads/penyashhijsya_gel_s_aminokislotami-300x300.png",
      price: 1000
    }, {
      id: 10,
      title: "Carich Детские влажные салфетки, 8 уп. * 8 шт.",
      thumbnail: "https://green-leaf.uz/wp-content/uploads/vlazhnye_salfetki_8x8-300x300.jpg",
      price: 1000
    }, {
      id: 11,
      title: "YIBEILE Детский пенящийся гель с аминокислотами , 300 мл",
      thumbnail: "https://green-leaf.uz/wp-content/uploads/pena_dlya_vann__aromat_klubniki__YIBEILE_300_ml-300x300.png",
      price: 1000
    }, {
      id: 12,
      title: "YIBEILE Детская зубная щетка, 1 шт",
      thumbnail: "https://green-leaf.uz/wp-content/uploads/YIBEILE-Detskaya-zubnaya-shhetka-300x300.jpg",
      price: 1000
    }, {
      id: 13,
      title: "YIBEILE Детская зубная паста, 80 г.",
      thumbnail: "https://green-leaf.uz/wp-content/uploads/zubnaya_pasta-300x300.jpg",
      price: 1000
    }, {
      id: 14,
      title: "Детские влажные салфетки Carich с молочком,25 шт.",
      thumbnail: "https://green-leaf.uz/wp-content/uploads/vlazhnye-salfetki-Carich-s-molochkom25-sht.-300x300.jpg",
      price: 1000
    }, {
      id: 15,
      title: "ILife Детские влажные салфетки Greenleaf серия Carich, 80 шт.",
      thumbnail: "https://green-leaf.uz/wp-content/uploads/vlazhnye_salfetki_zelyonye_2-300x300.jpg",
      price: 1000
    }, {
      id: 16,
      title: "Детские влажные салфетки Carich с молочком 25 шт",
      thumbnail: "https://green-leaf.uz/wp-content/uploads/vlazhnye-salfetki-Carich-s-molochkom25-sht..jpg",
      price: 1000
    }, {
      id: 17,
      title: "YIBEILE Детский пенящийся гель с аминокислотами, 300 мл",
      thumbnail: "https://green-leaf.uz/wp-content/uploads/penyashhijsya_gel_s_aminokislotami.png",
      price: 1000
    }, {
      id: 18,
      title: "YIBEILE Детский антибактериальный стиральный порошок, 500 мл",
      thumbnail: "https://green-leaf.uz/wp-content/uploads/stiralnyj_poroshok_antibakterialnyj__500_gr_.jpg",
      price: 1000
    },
  ]);
  // fetch products


  return (
    
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
