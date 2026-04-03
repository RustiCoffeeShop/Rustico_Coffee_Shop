/* ═══════════════════════════════════════════════
   RUSTICO COFFEE SHOP — app.js
   Datos del menú, lógica de la app y navegación
═══════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════
   DATOS DEL MENÚ

   INSTRUCCIONES DE IMÁGENES:
   - Reemplaza las rutas de "img" con tus imágenes reales
   - Ejemplo:  img: 'Bebidas/latte.jpg'
   - Si un item no tiene foto, déjalo sin la propiedad img
     y usará el emoji + degradado como fondo automáticamente
═══════════════════════════════════════════════ */


/* ─────────────────────────────────────────────
   DESAYUNOS — COMENTADOS PARA REACTIVAR
   Para activar: quita el bloque  /*DESAYUNOS_START … DESAYUNOS_END* /
   y también descomenta la línea de categoría más abajo
   ─────────────────────────────────────────────

/*DESAYUNOS_START
{ id:'tazon-fruta',         cat:'desayunos', name:'Tazón de Fruta',            desc:'Fruta de temporada con yogurt y queso cottage.',                                                                      price:'$75',  
{ id:'huevos-rusticos',     cat:'desayunos', name:'Huevos Rústico',             desc:'2 huevos en salsa especial, machaca frita, chilaquiles y frijoles refritos.',                                        price:'$180', img:'Desayunos/Huevos/huevo-rustico.jpg' },
{ id:'huevos-arrieros',     cat:'desayunos', name:'Huevos Arrieros',            desc:'2 huevos sobre arrachera, salsa martajada, papa salteada y frijoles.',                                               price:'$200', 
{ id:'huevos-rancheros',    cat:'desayunos', name:'Huevos Rancheros',           desc:'2 huevos sobre tortilla dorada, salsa ranchera, papas y frijoles.',                                                  price:'$150', 
{ id:'huevos-gusto',        cat:'desayunos', name:'Huevos al Gusto',            desc:'2 huevos con 1 ingrediente (jamón, salchicha, chorizo o tocino).',                                                   price:'$150', 
{ id:'huevos-machaca',      cat:'desayunos', name:'Huevos con Machaca',         desc:'2 huevos revueltos con machaca ranchera, papas y frijoles.',                                                         price:'$180', 
{ id:'omellet-ensenada',    cat:'desayunos', name:'Omellet Ensenada',           desc:'Relleno de guiso de marlín y queso, camarón al chipotle, chilaquiles y frijoles.',                                   price:'$250', 
{ id:'omellet-tijuana',     cat:'desayunos', name:'Omellet Tijuana',            desc:'Relleno de birria y queso, servida con su jugo y aguacate.',                                                         price:'$195', 
{ id:'omellet-arrachera',   cat:'desayunos', name:'Omellet de Arrachera',       desc:'Relleno de arrachera y queso, salsa martajada y aguacate.',                                                          price:'$195', 
{ id:'omellet-gusto',       cat:'desayunos', name:'Omellet al Gusto',           desc:'Relleno de 1 ingrediente (jamón, salchicha, chorizo o tocino).',                                                    price:'$195', 
{ id:'omellet-rustico',     cat:'desayunos', name:'Omellet Rústico',            desc:'Solo claras, mezcla de hongos al ajillo y queso cottage, ensalada de espinacas.',                                   price:'$180', 
{ id:'chilaquiles-casa',    cat:'desayunos', name:'Chilaquiles de la Casa',     desc:'Cielo, Mar y Tierra: arrachera, pollo, camarón. Con papas y frijoles.',                                             price:'$220', 
{ id:'chilaquiles-birria',  cat:'desayunos', name:'Chilaquiles con Birria',     desc:'Chilaquiles al gusto con birria y consomé, papas y frijoles.',                                                       price:'$200', 
{ id:'chilaquiles-arrachera',cat:'desayunos',name:'Chilaquiles con Arrachera',  desc:'Chilaquiles al gusto, queso, crema, aguacate y arrachera.',                                                          price:'$200', 
{ id:'chilaquiles-pollo',   cat:'desayunos', name:'Chilaquiles con Pollo',      desc:'Chilaquiles al gusto, queso, crema, aguacate y pechuga de pollo.',                                                   price:'$180', 
{ id:'chilaquiles-huevo',   cat:'desayunos', name:'Chilaquiles con Huevo',      desc:'Chilaquiles al gusto, queso, crema, aguacate y 2 huevos.',                                                           price:'$160', 
{ id:'enchiladas-poblanas', cat:'desayunos', name:'Enchiladas Poblanas',        desc:'4 tortillas rellenas de queso, pollo, camarón o marlín en salsa poblana.',                                          price:'$190', 
{ id:'enchiladas-verdes',   cat:'desayunos', name:'Enchiladas Verdes o Rojas',  desc:'4 tortillas rellenas de queso, pollo, camarón o marlín.',                                                           price:'$180', img:'Desayunos/Enchiladas/enchilada-verde.jpg'},
{ id:'ensalada-espinaca',   cat:'desayunos', name:'Ensalada de Espinaca',       desc:'Espinaca baby, manzana verde, almendras, queso feta, tomate cherry.',                                               price:'$160', 
{ id:'ensalada-manzana',    cat:'desayunos', name:'Ensalada de Manzana',        desc:'Mezcla de lechuga y espinaca, manzana verde, nuez caramelizada, queso de cabra.',                                   price:'$160', 
{ id:'toast-aguacate',      cat:'desayunos', name:'Toast de Aguacate',          desc:'Pan de granos, aguacate, huevo al gusto, tomate cherry, espinaca.',                                                  price:'$160', 
{ id:'toast-carnes',        cat:'desayunos', name:'Toast de Carnes Frías',      desc:'Pan de granos, carnes frías, aguacate, arúgula y tomate cherry.',                                                   price:'$160', 
{ id:'crepa-carnfrias',     cat:'desayunos', name:'Crepa Carnes Frías',         desc:'Rellena de carnes frías, mix de lechuga y espinaca, queso feta y aguacate.',                                        price:'$180', 
{ id:'crepa-pollo',         cat:'desayunos', name:'Crepa de Pollo',             desc:'Rellena de pechuga de pollo, queso y aguacate.',                                                                     price:'$180', 
{ id:'crepa-vegetariana',   cat:'desayunos', name:'Crepa Vegetariana',          desc:'Verduras asadas, queso feta, tomates cherry y salsa poblana.',                                                       price:'$180', 
{ id:'crepa-nutella',       cat:'desayunos', name:'Crepa Nutella con Plátano',  desc:'Deliciosa crepa dulce rellena de nutella y plátano.',                                                                price:'$180', img:'Desayunos/Crepas/frutos-rojos.jpg' },
{ id:'crepa-ferrero',       cat:'desayunos', name:'Crepa Ferrero',              desc:'Crepa dulce rellena de crema de avellana estilo Ferrero.',                                                           price:'$180', 
{ id:'crepa-durazno',       cat:'desayunos', name:'Crepa de Durazno',           desc:'Crepa dulce rellena de durazno.',                                                                                    price:'$180', 
{ id:'crepa-fresas',        cat:'desayunos', name:'Crepa Fresas con Crema',     desc:'Crepa dulce rellena de fresas y crema.',                                                                             price:'$180', 
{ id:'crepa-frutosrojos',   cat:'desayunos', name:'Crepa Frutos Rojos',         desc:'Crepa dulce rellena de mezcla de frutos rojos.',                                                                    price:'$180', 
{ id:'panfrances-ferrero',  cat:'desayunos', name:'Pan Francés Ferrero',        desc:'Pan francés estilo Ferrero o Kinder Bueno.',                                                                         price:'$200', 
{ id:'panfrances-tiramisu', cat:'desayunos', name:'Pan Francés Tiramisú',       desc:'Pan francés con topping de tiramisú.',                                                                               price:'$200', 
{ id:'panfrances-matcha',   cat:'desayunos', name:'Pan Francés Matcha',         desc:'Pan francés con crema de matcha.',                                                                                   price:'$230', 
{ id:'panfrances-fresas',   cat:'desayunos', name:'Pan Francés Fresas',         desc:'Pan francés con fresas y crema batida.',                                                                             price:'$200', 
{ id:'panfrances-cinnamon', cat:'desayunos', name:'Pan Francés Cinnamon',       desc:'Pan francés con canela y azúcar.',                                                                                   price:'$200', 
{ id:'pancake-clasico',     cat:'desayunos', name:'Los Clásicos',               desc:'2 hot cakes con fruta de temporada.',                                                                                price:'$150', 
{ id:'pancake-americano',   cat:'desayunos', name:'Los Americanos',             desc:'2 hot cakes, 2 huevos estrellados, 2 tiras de tocino y fruta.',                                                     price:'$200', 
DESAYUNOS_END*/


const menuData = [

  /* ── BEBIDAS CALIENTES ────────────────────── */
  { id:'espresso',          cat:'calientes', name:'Espresso',             desc:'Shot de espresso puro y concentrado.',                   priceM:'$35',  priceG:'$35', img:'./BEBIDAS/CALIENTES/C-1.png', gradient:'linear-gradient(135deg,#3a1a05,#7a3a10)' },
  { id:'macciato',          cat:'calientes', name:'Macchiato',            desc:'Espresso con poca espuma de leche.',                     priceM:'$50',  priceG:'$50', img:'./BEBIDAS/CALIENTES/C-2.png', gradient:'linear-gradient(135deg,#4a2010,#8a4a20)' },
  { id:'cappuccino',        cat:'calientes', name:'Cappuccino',           desc:'Espresso, poca leche y abundante espuma.',               priceM:'$65',  priceG:'$75', img:'./BEBIDAS/CALIENTES/C-3.png',gradient:'linear-gradient(135deg,#5a2a10,#a05020)' },
  { id:'latte',             cat:'calientes', name:'Latte Natural',        desc:'Espresso con leche vaporizada.',                         priceM:'$65',  priceG:'$75', img:'./BEBIDAS/CALIENTES/C-4.png', gradient:'linear-gradient(135deg,#4a2810,#9a5830)' },
  { id:'breve',             cat:'calientes', name:'Breve',                desc:'Espresso, mitad agua, mitad leche.',                     priceM:'$45',  priceG:'$55', img:'./BEBIDAS/CALIENTES/C-5.png', gradient:'linear-gradient(135deg,#3a1a08,#6a3a18)' },
  { id:'americano',         cat:'calientes', name:'Espresso Americano',   desc:'Espresso con agua caliente.',                            priceM:'$45',  priceG:'$55', img:'./BEBIDAS/CALIENTES/C-6.png', gradient:'linear-gradient(135deg,#2a1005,#5a2a15)' },
  { id:'caramel-macchiato', cat:'calientes', name:'Caramel Macchiato',    desc:'Espresso, caramelo, vainilla y leche.',                  priceM:'$85',  priceG:'$95', img:'./BEBIDAS/CALIENTES/C-7.png', gradient:'linear-gradient(135deg,#7a4a10,#c08030)' },
  { id:'mocha',             cat:'calientes', name:'Mocha',                desc:'Espresso, chocolate y leche vaporizada.',                priceM:'$75',  priceG:'$85', img:'./BEBIDAS/CALIENTES/C-8.png', gradient:'linear-gradient(135deg,#3a1a0a,#6a3a1a)' },
  { id:'choc-mexicano',     cat:'calientes', name:'Chocolate Mexicano',   desc:'Chocolate artesanal con leche caliente.',                priceM:'$60',  priceG:'$70', img:'./BEBIDAS/CALIENTES/C-9.png', gradient:'linear-gradient(135deg,#5a1a0a,#9a3a1a)' },
  { id:'chailatte',         cat:'calientes', name:'Chai Latte',           desc:'Polvo chai con leche vaporizada.',                       priceM:'$75',  priceG:'$85', img:'./BEBIDAS/CALIENTES/C-10.png', gradient:'linear-gradient(135deg,#6a3a10,#b06030)' },
  { id:'choc-blanco',       cat:'calientes', name:'Chocolate Blanco',     desc:'Chocolate blanco con leche caliente.',                   priceM:'$60',  priceG:'$70', img:'./BEBIDAS/CALIENTES/C-11.png', gradient:'linear-gradient(135deg,#5a3a20,#9a7040)' },
  { id:'cookies-cream-hot', cat:'calientes', name:'Cookies & Cream',      desc:'Polvo cookies & cream con leche.',                       priceM:'$65',  priceG:'$75', img:'./BEBIDAS/CALIENTES/C-12.png', gradient:'linear-gradient(135deg,#2a1a1a,#5a3a3a)' },
  { id:'matcha-green',      cat:'calientes', name:'Matcha Tea Green',     desc:'Polvo matcha premium con leche.',                        priceM:'$85',  priceG:'$95', img:'./BEBIDAS/CALIENTES/C-13.png', gradient:'linear-gradient(135deg,#4a2010,#8a4a20)' },
  { id:'red-velvet-hot',    cat:'calientes', name:'Red Velvet',           desc:'Polvo red velvet con leche caliente.',                   priceM:'$75',  priceG:'$85', img:'./BEBIDAS/CALIENTES/C-14.png', gradient:'linear-gradient(135deg,#5a1a1a,#9a3a3a)' },
  { id:'latte-mazapan',     cat:'calientes', name:'Latte de Mazapán',     desc:'Espresso, leche, mazapán y vainilla.',                   priceM:'$75',  priceG:'$85', img:'./BEBIDAS/CALIENTES/C-15.png', gradient:'linear-gradient(135deg,#6a3a10,#aa6a30)' },

  /* ── BOBA TEA ─────────────────────────────── */
  { id:'boba-mazapan',      cat:'boba', name:'Boba Mazapán',        desc:'Polvo mazapán, leche, hielo, crema batida con boba a elegir.',               price:'$95', img:'./BEBIDAS/BOBA/B-1.png', gradient:'linear-gradient(135deg,#5a2a1a,#9a5a3a)' },
  { id:'boba-taro',         cat:'boba', name:'Taro Boba',           desc:'Polvo taro, leche, hielo y crema batida con boba a elegir.',                 price:'$95', img:'./BEBIDAS/BOBA/B-2.png', gradient:'linear-gradient(135deg,#4a1a5a,#8a4a9a)' },
  { id:'boba-pina',         cat:'boba', name:'Piña Colada Boba',    desc:'Polvo piña, leche o té, hielo y crema batida.',                             price:'$110', img:'./BEBIDAS/BOBA/B-3.png', gradient:'linear-gradient(135deg,#4a4a10,#8a8a30)' },
  { id:'boba-frutosrojos',  cat:'boba', name:'Frutos Rojos Boba',   desc:'Mermelada de la casa, leche o té, crema batida con boba.',                  price:'$95',  img:'./BEBIDAS/BOBA/B-4.png', gradient:'linear-gradient(135deg,#4a1a2a,#8a3a5a)' },
  { id:'boba-blueberry',    cat:'boba', name:'Blueberry Boba',      desc:'Mermelada de la casa, leche o té, crema batida con boba.',                  price:'$95',  img:'./BEBIDAS/BOBA/B-5.png', gradient:'linear-gradient(135deg,#1a1a5a,#3a3a9a)' },
  { id:'boba-chai',         cat:'boba', name:'Chai Boba',           desc:'Polvo chai, leche, hielo y crema batida.',                                  price:'$110', img:'./BEBIDAS/BOBA/B-6.png', gradient:'linear-gradient(135deg,#5a3a10,#9a6a30)' },
  { id:'boba-matcha',       cat:'boba', name:'Matcha Boba',         desc:'Polvo matcha, leche, hielo y crema batida.',                                price:'$110', img:'./BEBIDAS/BOBA/B-7.png', gradient:'linear-gradient(135deg,#1a3a1a,#3a6a3a)' },
  { id:'boba-mango',        cat:'boba', name:'Mango Boba',          desc:'Mango, leche, base cristal, hielo y crema batida.',                        price:'$95',   img:'./BEBIDAS/BOBA/B-8.png', gradient:'linear-gradient(135deg,#5a3a10,#aa7020)' },
  { id:'tisana-moras',      cat:'boba', name:'Tisana Moras',        desc:'Tisana moras, hielo con boba a elegir.',                                   price:'$95',   img:'./BEBIDAS/BOBA/B-9.png', gradient:'linear-gradient(135deg,#3a1a3a,#6a3a6a)' },
  { id:'tisana-tropical',   cat:'boba', name:'Tisana Tropical',     desc:'Tisana fresa, kiwi, piña, coco, manzana con boba.',                        price:'$95',   img:'./BEBIDAS/BOBA/B-10.png', gradient:'linear-gradient(135deg,#3a4a10,#7a8a30)' },
  { id:'tisana-fresa-kiwi', cat:'boba', name:'Tisana Fresa–Kiwi',   desc:'Tisana fresa y kiwi, hielo con boba.',                                     price:'$95',   img:'./BEBIDAS/BOBA/B-11.png', gradient:'linear-gradient(135deg,#5a1a1a,#9a4a1a)' },
  { id:'tisana-temporada',  cat:'boba', name:'Tisana Temporada',    desc:'Tisana guayaba, manzana y canela con boba.',                               price:'$95',   img:'./BEBIDAS/BOBA/B-12.png', gradient:'linear-gradient(135deg,#5a1a1a,#9a3a1a)' },

  /* ── BEBIDAS FRÍAS ────────────────────────── */
  { id:'ice-latte',    cat:'frias', name:'Ice Latte',              desc:'Shot de espresso, leche y hielo.',                         priceM:'$75',  priceG:'$85', img:'./BEBIDAS/FRIAS/FR-1.png',  gradient:'linear-gradient(135deg,#1a1a3a,#3a3a6a)' },
  { id:'ice-coffee',   cat:'frias', name:'Ice Coffee',             desc:'Shot de espresso, agua y hielo.',                          priceM:'$65',  priceG:'$75', img:'./BEBIDAS/FRIAS/FR-2.png',  gradient:'linear-gradient(135deg,#1a0a0a,#3a2a2a)' },
  { id:'ice-caramel',  cat:'frias', name:'Ice Caramel Macchiato',  desc:'Espresso, vainilla, caramelo, leche y hielo.',             priceM:'$85',  priceG:'$95', img:'./BEBIDAS/FRIAS/FR-3.png',  gradient:'linear-gradient(135deg,#3a2a10,#7a6030)' },
  { id:'ice-mocha',    cat:'frias', name:'Ice Mocha',              desc:'Espresso, leche, hielo y chocolate.',                      priceM:'$75',  priceG:'$85', img:'./BEBIDAS/FRIAS/FR-4.png',  gradient:'linear-gradient(135deg,#2a1a0a,#5a3a1a)' },
  { id:'ice-chai',     cat:'frias', name:'Ice Chai Latte',         desc:'Polvo chai, leche y hielo.',                               priceM:'$75',  priceG:'$85', img:'./BEBIDAS/FRIAS/FR-5.png',  gradient:'linear-gradient(135deg,#4a2a10,#8a5a30)' },
  { id:'ice-cookies',  cat:'frias', name:'Ice Cookies & Cream',    desc:'Polvo Cookies & Cream, leche, hielo y oreo.',              priceM:'$75',  priceG:'$85', img:'./BEBIDAS/FRIAS/FR-6.png',  gradient:'linear-gradient(135deg,#1a1a1a,#3a3a3a)' },
  { id:'ice-matcha',   cat:'frias', name:'Ice Matcha Green Tea',   desc:'Polvo matcha, leche y hielo.',                             priceM:'$85',  priceG:'$95', img:'./BEBIDAS/FRIAS/FR-7.png',  gradient:'linear-gradient(135deg,#1a3a1a,#3a6a3a)' },
  { id:'ice-tisanas',  cat:'frias', name:'Ice Tisanas',            desc:'Tisana moras, manzana canela o tropical, con hielo.',      priceM:'$75',  priceG:'$85', img:'./BEBIDAS/FRIAS/FR-8.png',  gradient:'linear-gradient(135deg,#1a2a1a,#3a5a3a)' },
  { id:'ice-tea',      cat:'frias', name:'Ice Tea',                desc:'Té frutos rojos o té verde, esencia y hielo.',             priceM:'$60',  priceG:'$70', img:'./BEBIDAS/FRIAS/FR-9.png',  gradient:'linear-gradient(135deg,#3a1a2a,#6a3a4a)' },
  { id:'soda-italiana',cat:'frias', name:'Soda Italiana',          desc:'Agua mineral, esencia y hielo.',                           priceM:'$65',  priceG:'$75', img:'./BEBIDAS/FRIAS/FR-10.png',  gradient:'linear-gradient(135deg,#1a2a3a,#3a5a7a)' },
  { id:'ice-orange',   cat:'frias', name:'Ice Orange Coffee',      desc:'Espresso, agua, hielo, miel y jugo de naranja.',           priceM:'$75',  priceG:'$85', img:'./BEBIDAS/FRIAS/FR-11.png',  gradient:'linear-gradient(135deg,#5a3a10,#aa6a20)' },

  /* ── FRAPPUCCINOS ─────────────────────────── */
  { id:'frappe-mocha',       cat:'frappuccinos', name:'Frappuccino Mocha',       desc:'Polvo mocha, espresso, leche, hielo, chocolate y crema batida.',               priceM:'$75',  priceG:'$85', img:'./BEBIDAS/FRAPPUCCINOS/F-1.png',   gradient:'linear-gradient(135deg,#3a1a0a,#6a3a1a)' },
  { id:'frappe-caramel',     cat:'frappuccinos', name:'Frappuccino Caramel',     desc:'Polvo francesa, vainilla, caramelo, leche, hielo y crema batida.',             priceM:'$75',  priceG:'$85', img:'./BEBIDAS/FRAPPUCCINOS/F-2.png',   gradient:'linear-gradient(135deg,#6a3a10,#aa6a30)' },
  { id:'frappe-vainilla',    cat:'frappuccinos', name:'Frappuccino Vainilla',    desc:'Polvo vainilla, leche, hielo y crema batida.',                                 priceM:'$75',  priceG:'$85', img:'./BEBIDAS/FRAPPUCCINOS/F-3.png',   gradient:'linear-gradient(135deg,#5a3a20,#9a7040)' },
  { id:'frappe-oreo',        cat:'frappuccinos', name:'Frappuccino Oreo',        desc:'Polvo Cookies & Cream, oreo, leche, hielo y crema batida.',                    priceM:'$75',  priceG:'$85', img:'./BEBIDAS/FRAPPUCCINOS/F-4.png',   gradient:'linear-gradient(135deg,#1a1a1a,#4a4a4a)' },
  { id:'frappe-chai',        cat:'frappuccinos', name:'Frappuccino Chai',        desc:'Polvo chai, leche, hielo y crema batida.',                                     priceM:'$75',  priceG:'$85', img:'./BEBIDAS/FRAPPUCCINOS/F-5.png',   gradient:'linear-gradient(135deg,#5a3a10,#9a6a30)' },
  { id:'frappe-ferrero',     cat:'frappuccinos', name:'Frappuccino Ferrero',     desc:'Polvo vainilla, avellana, crema avellana, leche y crema batida.',              priceM:'$90',  priceG:'$100',img:'./BEBIDAS/FRAPPUCCINOS/F-6.png',  gradient:'linear-gradient(135deg,#4a2a10,#8a5a30)' },
  { id:'frappe-matcha',      cat:'frappuccinos', name:'Frappuccino Matcha',      desc:'Polvo matcha, leche, hielo y crema batida.',                                   priceM:'$85',  priceG:'$95', img:'./BEBIDAS/FRAPPUCCINOS/F-7.png',  gradient:'linear-gradient(135deg,#1a3a1a,#3a6a3a)' },
  { id:'frappe-reeses',      cat:'frappuccinos', name:'Frappuccino Reeses',      desc:'Polvo vainilla, leche, crema de cacahuate, hielo y chocolate.',                priceM:'$90',  priceG:'$100', img:'./BEBIDAS/FRAPPUCCINOS/F-8.png', gradient:'linear-gradient(135deg,#5a3a10,#9a6a30)' },
  { id:'frappe-nutella',     cat:'frappuccinos', name:'Frappuccino Nutella',     desc:'Polvo chocolate, nutella, leche, hielo y crema batida.',                       priceM:'$85',  priceG:'$95', img:'./BEBIDAS/FRAPPUCCINOS/F-9.png',  gradient:'linear-gradient(135deg,#3a1a0a,#6a3a1a)' },
  { id:'frappe-galleta',     cat:'frappuccinos', name:'Explosión de Galleta',    desc:'Polvo francesa, espresso, galleta maría, leche y crema batida.',               priceM:'$75',  priceG:'$85', img:'./BEBIDAS/FRAPPUCCINOS/F-10.png',  gradient:'linear-gradient(135deg,#5a3a20,#9a7040)' },
  { id:'frappe-cherry',      cat:'frappuccinos', name:'Cherry Frappe',           desc:'Polvo vainilla, cereza, leche y hielo.',                                       priceM:'$85',  priceG:'$95', img:'./BEBIDAS/FRAPPUCCINOS/F-11.png',  gradient:'linear-gradient(135deg,#5a1a1a,#9a3a3a)' },
  { id:'frappe-creme-brulee',cat:'frappuccinos', name:'Creme Brûlée',            desc:'Polvo de creme brûlée, leche, hielo, trozos de flan y jarabe de maple.',       priceM:'$100', priceG:'$110',img:'./BEBIDAS/FRAPPUCCINOS/F-12.png',  gradient:'linear-gradient(135deg,#6a4a10,#aa8030)' },
  { id:'frappe-chomenta',    cat:'frappuccinos', name:'Choco–Menta',             desc:'Polvo mocha, espresso, menta, leche, hielo y chocolate.',                      priceM:'$85',  priceG:'$95', img:'./BEBIDAS/FRAPPUCCINOS/F-13.png', gradient:'linear-gradient(135deg,#1a3a1a,#3a6a4a)' },
  { id:'frappe-mazapan',     cat:'frappuccinos', name:'Frappuccino Mazapán',     desc:'Polvo vainilla, mazapán, leche, hielo y crema batida.',                        priceM:'$75',  priceG:'$85', img:'./BEBIDAS/FRAPPUCCINOS/F-14.png',  gradient:'linear-gradient(135deg,#5a3a10,#9a6a30)' },
  { id:'frappe-bombon',      cat:'frappuccinos', name:'Frappuccino Bombón',      desc:'Polvo vainilla, leche, bombón, hielo y crema batida.',                         priceM:'$85',  priceG:'$95', img:'./BEBIDAS/FRAPPUCCINOS/F-15.png', gradient:'linear-gradient(135deg,#5a1a3a,#9a3a6a)' },

  /* ── POSTRES/DULCE ──────────────────────────────── */
  { id:'pay-limon',        cat:'postres', name:'Pay de Limón',          desc:'Rebanada de pay de queso con limón.',                              price:'$55', img:'./POSTRES/DULCE/1-P.png' },
  { id:'chocoflan',        cat:'postres', name:'Chocoflan',             desc:'Rebanada de chocoflan, combinación de chocolate y flan.',          price:'$55', img:'./POSTRES/DULCE/2-P.png' },
  { id:'pastel-chocolate', cat:'postres', name:'Pastel de Chocolate',   desc:'Rebanada de pastel de chocolate.',                                 price:'$55', img:'./POSTRES/DULCE/3-P.png' },
  { id:'pay-frambuesa',    cat:'postres', name:'Pay de Queso Frambuesa',desc:'Rebanada de pay de queso con frambuesa.',                          price:'$65', img:'./POSTRES/DULCE/4-P.png' },
  { id:'galletas',         cat:'postres', name:'Galletas',              desc:'Galletas artesanales, precio por pieza.',                          price:'$15', img:'./POSTRES/DULCE/5-P.png' },
  { id:'pan-dulce',        cat:'postres', name:'Pan Dulce',             desc:'Selección de pan dulce, precio por pieza.',                        price:'$25', img:'./POSTRES/DULCE/6-P.png' },
  { id:'pan-frances',      cat:'postres', name:'Pan Frances',           desc:'Pan Frances, incluye nieve.',                                      price:'$200', img:'./POSTRES/DULCE/7-P.png' },
  { id:'crepa-dulce',      cat:'postres', name:'Crepas',                desc:'Crepas dulces, incluye nieve.',                                    price:'$150', img:'./POSTRES/DULCE/8-P.png' },

  /* ── SALADOS ──────────────────────────────── */
  { id:'bagel-jamon',    cat:'salados', name:'Bagel de Jamón',     desc:'Jamón, lechuga, tomate, tocino y mayonesa.',                                             price:'$85',  img:'./SALADOS/S-1.png', gradient:'linear-gradient(135deg,#3a2a1a,#7a5a3a)' },
  { id:'bagel-pollo',    cat:'salados', name:'Bagel de Pollo',     desc:'Pollo, lechuga, tomate, tocino y mayonesa.',                                             price:'$100', img:'./SALADOS/S-2.png', gradient:'linear-gradient(135deg,#4a3a1a,#8a6a3a)' },
  { id:'bagel-americano',cat:'salados', name:'Bagel Americano',    desc:'Huevo, jamón, tocino y queso amarillo.',                                                 price:'$85',  img:'./SALADOS/S-3.png', gradient:'linear-gradient(135deg,#5a3a10,#9a6a30)' },
  { id:'sandwich-jamon', cat:'salados', name:'Sandwich de Jamón',  desc:'Jamón, lechuga, tomate, tocino y mayonesa.',                                             price:'$85',  img:'./SALADOS/S-4.png', gradient:'linear-gradient(135deg,#3a2a1a,#7a5a3a)' },
  { id:'sandwich-pollo', cat:'salados', name:'Sandwich de Pollo',  desc:'Pollo, lechuga, tomate, tocino y mayonesa.',                                             price:'$95',  img:'./SALADOS/S-5.png', gradient:'linear-gradient(135deg,#4a3a1a,#8a6a3a)' },
  { id:'croissant',      cat:'salados', name:'Croissant de Jamón Serrano',  desc:'Jamón Serrano, queso panela, mix de ensalada primavera.',                       price:'$145', img:'./SALADOS/S-9.png', gradient:'linear-gradient(135deg,#4a3a1a,#8a6a3a)' },
  { id:'croissant',      cat:'salados', name:'Croissant de Huevo',  desc:'Huevo, jamón, germinado.',                                                              price:'$145', img:'./SALADOS/S-10.png', gradient:'linear-gradient(135deg,#4a3a1a,#8a6a3a)' },
  { id:'croissant',      cat:'salados', name:'Croissant de Jamón',  desc:'Jamón, queso mozzarella, mix de ensalada primavera.',                                   price:'$145', img:'./SALADOS/S-11.png', gradient:'linear-gradient(135deg,#4a3a1a,#8a6a3a)' },
  { id:'croissant',      cat:'salados', name:'Croissant de Manchego',  desc:'Jamón, queso manchego, tomate, lechuga.',                                            price:'$145', img:'./SALADOS/S-12.png', gradient:'linear-gradient(135deg,#4a3a1a,#8a6a3a)' },
  { id:'ensalada-cesar', cat:'salados', name:'Ensalada Pollo',     desc:'Lechuga romana, pollo, chile morrón, tomate cherry, zanahoria, croutons y aderezo.',    price:'$120', img:'./SALADOS/S-6.png', gradient:'linear-gradient(135deg,#1a2a1a,#3a5a3a)' },
  { id:'ensalada-papa',  cat:'salados', name:'Ensalada de Papa',   desc:'Zanahoria, chícharo, cebollín, mayonesa y pollo.',                                       price:'$80', img:'./SALADOS/S-7.png', gradient:'linear-gradient(135deg,#3a3a1a,#6a6a3a)' },
  { id:'ensalada-pasta', cat:'salados', name:'Pasta Pesto',        desc:'Tomate cherry, queso panela y pollo.',                                                   price:'$80', img:'./SALADOS/S-8.png', gradient:'linear-gradient(135deg,#2a3a1a,#5a7a3a)' },
];


/* CATEGORÍAS */
const categories = [
  { id:'all',          name:'Todo',         emoji:'✨' },
  // { id:'desayunos', name:'Desayunos',    emoji:'🍳' }, // DESAYUNOS_CAT
  { id:'calientes',    name:'Calientes',    emoji:'☕' },
  { id:'boba',         name:'Boba Tea',     emoji:'🍵' },
  { id:'frias',        name:'Frías',        emoji:'🧊' },
  { id:'frappuccinos', name:'Frappuccinos', emoji:'🥤' },
  { id:'postres',      name:'Postres',      emoji:'🍰' },
  { id:'salados',      name:'Salados',      emoji:'🥪' },
];


/* ESTADO DE LA APP */
let currentCat    = 'all';
let currentItem   = null;
let carouselIndex = 0;
let carouselTimer = null;


/* NAVEGACIÓN ENTRE PANTALLAS */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function goHome() { showScreen('home'); }

function showTab(tab) {
  showScreen(tab);
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  if (tab === 'home') {
    document.getElementById('navHome').classList.add('active');
    const navHome2 = document.getElementById('navHome2');
    if (navHome2) navHome2.classList.add('active');
  } else {
    document.getElementById('navContacto').classList.add('active');
    const navContacto2 = document.getElementById('navContacto2');
    if (navContacto2) navContacto2.classList.add('active');
  }
}


/* ═══════════════════════════════════════════════
   CARRUSEL
═══════════════════════════════════════════════ */
function initCarousel() {
  const cards = document.querySelectorAll('.promo-card');
  const dots  = document.getElementById('carouselDots');
  dots.innerHTML = '';

  cards.forEach((_, i) => {
    const d = document.createElement('span');
    if (i === 0) d.classList.add('active');
    d.onclick = () => goToSlide(i);
    dots.appendChild(d);
  });

  startCarouselTimer();
}

function goToSlide(idx) {
  const cards = document.querySelectorAll('.promo-card');
  carouselIndex = (idx + cards.length) % cards.length;
  const inner     = document.getElementById('carouselInner');
  const cardWidth = cards[0].parentElement.offsetWidth;
  inner.style.transform = `translateX(-${carouselIndex * (cardWidth - 40 + 16)}px)`;
  document.querySelectorAll('.carousel-dots span')
    .forEach((d, i) => d.classList.toggle('active', i === carouselIndex));
}

function startCarouselTimer() {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(() => goToSlide(carouselIndex + 1), 4000);
}


/* ═══════════════════════════════════════════════
   RENDER DE CATEGORÍAS
═══════════════════════════════════════════════ */
function renderCats() {
  const wrap = document.getElementById('catsScroll');
  wrap.innerHTML = '';

  categories.forEach(cat => {
    const el = document.createElement('div');
    el.className = 'cat-pill' + (cat.id === currentCat ? ' active' : '');
    el.innerHTML = `<div class="cat-icon">${cat.emoji}</div>
                    <span class="cat-name">${cat.name}</span>`;
    el.onclick = () => filterByCat(cat.id);
    wrap.appendChild(el);
  });
}

function filterByCat(catId) {
  currentCat = catId;
  document.getElementById('searchInput').value = '';
  renderCats();
  renderItems();

  const titles = {
    all: 'Todo el menú', calientes: 'Bebidas Calientes',
    boba: 'Boba Tea',    frias: 'Bebidas Frías',
    frappuccinos: 'Frappuccinos', postres: 'Postres',
    salados: 'Salados',  desayunos: 'Desayunos'
  };
  document.getElementById('itemsTitle').textContent = titles[catId] || 'Menú';
  showScreen('home');
}


/* ═══════════════════════════════════════════════
   BÚSQUEDA
═══════════════════════════════════════════════ */
function filterItems() {
  currentCat = 'all';
  renderCats();
  renderItems();
  document.getElementById('itemsTitle').textContent = 'Resultados';
}


/* ═══════════════════════════════════════════════
   RENDER DE ITEMS
═══════════════════════════════════════════════ */
function renderItems() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  let items = menuData;

  if (currentCat !== 'all') items = items.filter(i => i.cat === currentCat);
  if (query) items = items.filter(i =>
    i.name.toLowerCase().includes(query) ||
    i.desc.toLowerCase().includes(query)
  );

  const grid = document.getElementById('itemsGrid');
  grid.innerHTML = '';

  if (!items.length) {
    grid.innerHTML = `<div class="no-results">
      <div class="nr-emoji">🔍</div>
      <p>No encontramos "${query}"</p>
    </div>`;
    return;
  }

  items.forEach(item => {
    const card  = document.createElement('div');
    card.className = 'item-card';
    const price = item.price || item.priceM || '';
    const grad  = item.gradient || 'linear-gradient(135deg,#2a1a0a,#5a3a1a)';

    let mediaHTML;
    if (item.img) {
      mediaHTML = `
        <img class="item-img" src="${item.img}" alt="${item.name}"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="item-img-placeholder" style="display:none;background:${grad}">${item.emoji}</div>`;
    } else {
      mediaHTML = `<div class="item-img-placeholder" style="background:${grad}">${item.emoji}</div>`;
    }

    card.innerHTML = `
      ${mediaHTML}
      <div class="item-body">
        <p class="item-name">${item.name}</p>
        <p class="item-desc">${item.desc}</p>
        <div class="item-footer">
          <span class="item-price">${price}</span>
          <div class="item-arrow">›</div>
        </div>
      </div>`;

    card.onclick = () => openDetail(item);
    grid.appendChild(card);
  });
}


/* ═══════════════════════════════════════════════
   DETALLE DE PRODUCTO
═══════════════════════════════════════════════ */
function openDetail(item) {
  currentItem = item;
  const hasSizes = !!(item.priceM && item.priceG);
  const grad     = item.gradient || 'linear-gradient(135deg,#2a1a0a,#5a3a1a)';
  const catNames = {
    calientes: 'Bebidas Calientes', boba: 'Boba Tea',
    frias: 'Bebidas Frías',         frappuccinos: 'Frappuccinos',
    postres: 'Postres',             salados: 'Salados',
    desayunos: 'Desayunos'
  };

  let mediaHTML;
  if (item.img) {
    mediaHTML = `
      <img class="detail-hero" src="${item.img}" alt="${item.name}"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="detail-hero-placeholder" style="display:none;background:${grad}">${item.emoji}</div>`;
  } else {
    mediaHTML = `<div class="detail-hero-placeholder" style="background:${grad}">${item.emoji}</div>`;
  }

  let sizesHTML = '';
  if (hasSizes) {
    sizesHTML = `
      <div class="detail-sizes">
        <p class="detail-sizes-title">Tamaño</p>
        <div class="sizes-row">
          <button class="size-btn active" id="sizeM" onclick="selectSize('M')">
            <span class="size-label">Mediano</span>
            <span class="size-price">${item.priceM}</span>
          </button>
          <button class="size-btn" id="sizeG" onclick="selectSize('G')">
            <span class="size-label">Grande</span>
            <span class="size-price">${item.priceG}</span>
          </button>
        </div>
      </div>`;
  }

  let extrasHTML = '';
  if (['calientes'].includes(item.cat)) {
    extrasHTML = `
      <div class="detail-extras">
        <p class="detail-extras-title">EXTRAS</p>
        <div class="detail-extras-body">
          <p class="detail-extras-text">Leche vegetal, esencia, crema batida, lechera, chocolate, cajeta, oreo, bombón, shot de espresso.</p>
          <p class="detail-extras-price">$15 - 20</p>
        </div>
      </div>`;
  } else if (item.cat === 'boba') {
    extrasHTML = `
      <div class="detail-extras">
        <p class="detail-extras-title">EXTRAS</p>
        <div class="detail-extras-body">
          <p class="detail-extras-text">Espress, leche vegetal, esencia, crema batida, lechera, chocolate, bobba, perla explosiva.</p>
          <p class="detail-extras-price">$15 - 20</p>
        </div>
      </div>`;
  } else if (item.cat === 'frias') {
    extrasHTML = `
      <div class="detail-extras">
        <p class="detail-extras-title">EXTRAS</p>
        <div class="detail-extras-body">
          <p class="detail-extras-text">Espress, leche vegetal, bobba, perla explosiva, jelly, esencia, lechera, chocolate, crema batida.</p>
          <p class="detail-extras-price">$15 - 20</p>
        </div>
      </div>`;
    } else if (item.cat === 'frappuccinos') {
    extrasHTML = `
      <div class="detail-extras">
        <p class="detail-extras-title">EXTRAS</p>
        <div class="detail-extras-body">
          <p class="detail-extras-text">Espress, leche vegetal, bobba, perla explosiva, jelly, esencia, crema batida.</p>
          <p class="detail-extras-price">$15 - 20</p>
        </div>
      </div>`;
  } else if (item.cat === 'salados') {
    extrasHTML = `
      <div class="detail-extras">
        <p class="detail-extras-title">EXTRAS</p>
        <div class="detail-extras-body">
          <p class="detail-extras-text">Jamón / Pollo / Tocino / Queso / Huevo</p>
          <p class="detail-extras-price">$20</p>
        </div>
        <div class="detail-extras-body">
          <p class="detail-extras-text">Papas</p>
          <p class="detail-extras-price">$30</p>
        </div>
      </div>`;
  }

let esenciasHTML = '';
if (item.cat === 'calientes') {
  esenciasHTML = `
    <div class="detail-esencias">
      <p class="detail-esencias-title">ESENCIAS</p>
      <div class="detail-esencias-body">

        <label class="esencia-item"><span>Lavanda</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Menta</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Chai</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Rosas</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Manzana</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Ron con mantequilla</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Ron con frambuesa</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Coco</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Crema irlandesa</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Tiramisú</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Vainilla</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Caramelo</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Avellana</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Canela</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Amaretto</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Plátano</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Calabaza</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Bombón tostado</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Galleta de gengibre</span><input type="radio" name="esencia"><span class="checkmark"></span></label>

      </div>
    </div>`;

} else if (item.cat === 'frias') {
  esenciasHTML = `
    <div class="detail-esencias">
      <p class="detail-esencias-title">EXTRAS</p>
      <div class="detail-esencias-body">

        <label class="esencia-item"><span>Jamaica</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Lima</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Mandarina</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Sandia</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Mora azul</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Fresa</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Frambuesa</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Kiwi</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Piña</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Mango</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Granada</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Cereza</span><input type="radio" name="esencia"><span class="checkmark"></span></label>
        <label class="esencia-item"><span>Manzana verde</span><input type="radio" name="esencia"><span class="checkmark"></span></label>

      </div>
    </div>`;
}
document.getElementById('detailContent').innerHTML = `
    ${mediaHTML}
    <div class="detail-body">
      <p class="detail-category">${catNames[item.cat] || ''}</p>
      <h2 class="detail-name">${item.name}</h2>
      <p class="detail-desc">${item.desc}</p>
      ${sizesHTML}
      ${extrasHTML}
      ${esenciasHTML}
      <div class="detail-price-row">
        <span class="detail-price" id="detailPrice">${item.price || item.priceM}</span>
      </div>
    </div>`;

  showScreen('detail');
}

function selectSize(size) {
  const item = currentItem;
  document.getElementById('sizeM').classList.toggle('active', size === 'M');
  document.getElementById('sizeG').classList.toggle('active', size === 'G');
  document.getElementById('detailPrice').textContent = size === 'M' ? item.priceM : item.priceG;
}

function closeDetail() { showScreen('home'); }


/* ═══════════════════════════════════════════════
   SLIDESHOW DE LA SPLASH SCREEN
   Cambia la imagen de fondo cada 3 segundos
═══════════════════════════════════════════════ */
function initSplashSlideshow() {
  const slides = document.querySelectorAll('.splash-slide');
  const dots   = document.querySelectorAll('.splash-dot');
  let current  = 0;

  // Si no hay imágenes reales, el fallback de color CSS se ve de todos modos
  setInterval(() => {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }, 3000);

  // Los puntitos también son clickeables
  dots.forEach((dot, i) => {
    dot.onclick = () => {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = i;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    };
  });
}


/* ═══════════════════════════════════════════════
   INICIALIZACIÓN
═══════════════════════════════════════════════ */
renderCats();
renderItems();
initCarousel();
initSplashSlideshow();