/*
 * CICLO COMERCIAL — datos del mes.
 * Este es el ÚNICO archivo que hay que editar cada mes (ver LEEME.md).
 * Precios en pesos, sin puntos ni signos.
 * Fuente: "Condiciones Comerciales Mes de Noviembre 2026" (envío 30-10-2026).
 *
 * Porcentajes: se muestra el % que COMUNICA la empresa (ej. "35%"), aunque el precio
 * real equivalga a otro descuento (ej. $34.900 sobre $57.920 = 39,7%). El precio manda.
 */
window.CICLO = {
  mes: "Noviembre 2026",
  envio: "30-10-2026",
  vigenciaHasta: "2026-11-30",

  regiones: [
    { id: "resto", nombre: "Resto País", activa: true },
    // Desactivadas por ahora. Las promos solo tienen precio para "resto": antes de activar
    // una región hay que cargar sus precios promocionales (ver LEEME.md).
    { id: "patagonia", nombre: "Patagonia", activa: false },
    { id: "tdf", nombre: "Tierra del Fuego", activa: false }
  ],

  // Medios de pago. Cada plan muestra solo los que tiene cargados en "promos".
  mops: [
    { id: "tc", nombre: "Tarjeta de crédito", corto: "TC", riesgoAlto: true },
    { id: "wc", nombre: "Wallet Connect / Débito", corto: "WC / TD", riesgoAlto: false },
    { id: "ef", nombre: "Efectivo", corto: "EF", riesgoAlto: false }
  ],

  // Abono mensual de cada deco adicional (mirror / Go Box)
  abonoDecoAdicional: 12720,
  maxDecos: 4,

  planes: [
    {
      id: "superlite",
      nombre: "Super Lite HD",
      bajada: "+ Amazon Prime Video",
      incluye: ["Señal HD"],
      apps: ["Amazon Prime Video", "DGO"],
      precio: { resto: 57920, patagonia: 68530, tdf: 56636 },
      maxDecos: 2, // "Mirror 3° y 4° no aplican"
      adicionales: ["universal", "fslite", "hotpack"],
      promos: {
        tc: {
          tramos: [ { meses: 6, desc: "35%", precio: { resto: 34900 } } ],
          instalacion: [0, 0], // precio por deco: principal, 2do
          textoDecos: "Deco principal $0 (2x1) · 2do deco $0"
        },
        wc: {
          tramos: [ { meses: 6, desc: "10%", precio: { resto: 49900 } } ],
          instalacion: [16500, 16500],
          textoDecos: "Deco principal $16.500 · 2do deco $16.500"
        },
        ef: {
          tramos: [],
          instalacion: [16500, 16500],
          textoDecos: "Deco principal $16.500 · 2do deco $16.500"
        }
      }
    },
    {
      id: "oro",
      nombre: "ORO HD",
      bajada: "+ Disney+ y Amazon Prime Video",
      incluye: ["Señal HD"],
      apps: ["Amazon Prime Video", "Disney+", "DGO"],
      precio: { resto: 128750, patagonia: 149865, tdf: 123855 },
      maxDecos: 4,
      adicionales: ["universal", "fullservice", "hotpack"],
      promos: {
        tc: {
          tramos: [ { meses: 12, desc: "70%", precio: { resto: 34900 } } ],
          instalacion: [0, 0, 16500, 16500],
          bonifAbonoDeco: { deco: 2, meses: 12 }, // 2do deco convencional con abono bonificado 100% x 12m
          // Go Box (deco Android para TV no Smart): se suma como adicional, nunca es el principal. Sin bonificación.
          goBox: { instalacion: 16500, abono: 12720 },
          textoDecos: "Deco principal $0 (2x1) · 2do deco $0 con abono bonificado 100% x 12 meses · 3° y 4° $16.500 · Go Box $16.500 + $12.720/mes"
        },
        wc: {
          tramos: [ { meses: 12, desc: "55%", precio: { resto: 55900 } } ],
          instalacion: [16500, 16500, 16500, 16500],
          textoDecos: "Cada deco $16.500"
        },
        ef: {
          tramos: [],
          instalacion: [16500, 16500, 16500, 16500],
          textoDecos: "Cada deco $16.500"
        }
      }
    },
    {
      id: "flex1",
      nombre: "Flex 1",
      bajada: "+ Dsports y Amazon Prime Video",
      incluye: ["Señal HD"],
      apps: ["Dsports", "Amazon Prime Video", "DGO"],
      precio: { resto: 59110, patagonia: 67628, tdf: 55891 },
      maxDecos: 4,
      adicionales: ["fslite"],
      promos: {
        // Sin efectivo: el plan Flex no se vende en EF.
        tc: {
          tramos: [ { meses: 8, desc: "24%", precio: { resto: 44900 } } ],
          instalacion: [0, 16500, 16500, 16500],
          bonifAbonoDeco: { deco: 2, meses: 8 },
          textoDecos: "Deco principal $0 · 2do deco $16.500 con abono bonificado 100% x 8 meses · 3° y 4° $16.500"
        },
        wc: {
          tramos: [ { meses: 6, desc: "15%", precio: { resto: 49900 } } ],
          instalacion: [16500, 16500, 16500, 16500],
          bonifAbonoDeco: { deco: 2, meses: 6 },
          textoDecos: "Cada deco $16.500 · 2do deco con abono bonificado 100% x 6 meses"
        }
      }
    },
    {
      id: "flex2",
      nombre: "Flex 2",
      bajada: "+ Dsports, Fútbol Argentino y Amazon Prime Video",
      incluye: ["Señal HD"],
      apps: ["Dsports", "Fútbol Argentino", "Amazon Prime Video", "DGO"], // Fútbol Argentino incluido: no se ofrece como premium aparte,
      precio: { resto: 82960, patagonia: 94785, tdf: 78335 },
      maxDecos: 4,
      adicionales: ["fullservice"],
      promos: {
        // Sin efectivo: el plan Flex no se vende en EF.
        tc: {
          tramos: [ { meses: 8, desc: "30%", precio: { resto: 55900 } } ],
          instalacion: [0, 16500, 16500, 16500],
          bonifAbonoDeco: { deco: 2, meses: 8 },
          textoDecos: "Deco principal $0 · 2do deco $16.500 con abono bonificado 100% x 8 meses · 3° y 4° $16.500"
        },
        wc: {
          tramos: [ { meses: 6, desc: "24%", precio: { resto: 62900 } } ],
          instalacion: [16500, 16500, 16500, 16500],
          bonifAbonoDeco: { deco: 2, meses: 6 },
          textoDecos: "Cada deco $16.500 · 2do deco con abono bonificado 100% x 6 meses"
        }
      }
    },
    {
      id: "plus",
      nombre: "ORO Plus HD",
      bajada: "+ Disney+ y Amazon Prime Video",
      incluye: ["Grilla Plus en HD"],
      apps: ["Amazon Prime Video", "Disney+", "DGO"],
      precio: { resto: 144960, patagonia: 167070, tdf: 138074 },
      maxDecos: 4,
      adicionales: ["universal", "fullservice"],
      promos: {
        tc: {
          tramos: [ { meses: 6, desc: "45%", precio: { resto: 78900 } } ],
          instalacion: [0, 16500, 16500, 16500],
          textoDecos: "Deco principal $0 · 2do, 3° y 4° $16.500"
        },
        wc: {
          tramos: [],
          instalacion: [16500, 16500, 16500, 16500],
          textoDecos: "Cada deco $16.500"
        },
        ef: {
          tramos: [],
          instalacion: [16500, 16500, 16500, 16500],
          textoDecos: "Cada deco $16.500"
        }
      }
    }
  ],

  /*
   * Adicionales con beneficio promocional.
   * esquema: meses con % de descuento sobre el precio vigente; después sigue a precio vigente.
   * obligatorio: viene siempre incluido en el alta (el vendedor no lo puede quitar).
   * soloMop: si el beneficio aplica solo a ciertos medios de pago.
   */
  adicionalesPromo: {
    universal: {
      nombre: "Universal+",
      precio: 14300,
      obligatorio: true, // siempre incluido: no se puede destildar en el presupuesto
      esquema: [ { meses: 1, desc: 100 }, { meses: 2, desc: 75 }, { meses: 2, desc: 50 }, { meses: 2, desc: 25 } ],
      texto: "1 mes gratis + 2 meses 75% off + 2 meses 50% off + 2 meses 25% off"
    },
    fullservice: {
      nombre: "Full Service",
      precio: 11200,
      obligatorio: true, // siempre incluido: no se puede destildar en el presupuesto
      esquema: [ { meses: 1, desc: 100 }, { meses: 2, desc: 50 } ],
      texto: "1 mes bonificado + 2 meses 50% off"
    },
    fslite: {
      nombre: "Full Service Lite",
      precio: 2680,
      obligatorio: true, // siempre incluido: no se puede destildar en el presupuesto
      esquema: [ { meses: 1, desc: 100 }, { meses: 2, desc: 50 } ],
      texto: "1 mes bonificado + 2 meses 50% off"
    },
    hotpack: {
      nombre: "Hot Pack",
      precio: 14900,
      obligatorio: false, // lo marca el vendedor si el cliente lo pide en la carga
      soloMop: ["tc"],
      esquema: [ { meses: 1, desc: 100 }, { meses: 2, desc: 50 } ],
      texto: "Con TC, seleccionándolo en la carga: 1 mes gratis + 2 meses 50% off"
    }
  },

  premiums: [
    { nombre: "HBO Pack HD", precio: 14400 },
    { nombre: "HBO Max HD", precio: 14400 },
    { nombre: "Fútbol Argentino", precio: 28600 },
    { nombre: "Fútbol Paraguayo", precio: 11400 },
    { nombre: "Disney", precio: 11570 },
    { nombre: "Paramount+", precio: 6750 },
    { nombre: "Vix", precio: 3967 },
    { nombre: "NFL Game Pass", precio: 3388 },
    { nombre: "Globo", precio: 16100 },
    { nombre: "NHK", precio: 15500 },
    { nombre: "Zee TV", precio: 15500 },
    { nombre: "VTV", precio: 6500 },
    { nombre: "EXXXOTICO", precio: 14000 }
  ],

  ppv: [
    { nombre: "PPV Librería HD", precio: 3740 },
    { nombre: "Linear HD PPV New Titles", precio: 5450 },
    { nombre: "Prem Win Linear HD PPV", precio: 6260 },
    { nombre: "Linear SD PPV New Titles", precio: 4800 },
    { nombre: "Premium Window Linear PPV", precio: 5870 },
    { nombre: "Adultos IPPV (WEB/IVR/SMS)", precio: 6070 },
    { nombre: "Adicional OPPV (telefónica)", precio: 1590 },
    { nombre: "Primary Super Premium SD & HD", precio: 15770 },
    { nombre: "PPV Fútbol SD / HD", precio: 20910 },
    { nombre: "PPV Pack 2 Películas", precio: 6790 },
    { nombre: "PPV HD Movie Combo Promotion", precio: 5450 },
    { nombre: "50% Discount PPV Promotion HD", precio: 3070 },
    { nombre: "Secondary Super Prem SD & HD", precio: 14330 },
    { nombre: "Ext-VOD WB SD & HD", precio: 6070 }
  ],

  // Reglas para el vendedor (no salen en el presupuesto)
  reglas: [
    "Los proporcionales están bonificados para todas las altas.",
    "Score con riesgo alto: no ingresa por EF, Wallet Connect ni TD. Solo TC.",
    "La promo con TC aplica a todos los scores, sujeta a mantener la tarjeta como medio de pago.",
    "Flex 1 y Flex 2: solo con TC o Wallet Connect / Débito (no se venden en efectivo). Incluyen Dsports.",
    "Máximo 4 decodificadores por cuenta. En Super Lite, el 3° y 4° no aplican.",
    "Instalación de cada deco: $16.500 (salvo los bonificados de cada promo).",
    "Abono mensual de cada mirror o Go Box: $12.720 (Resto País).",
    "Go Box (deco Android para TV no Smart): solo ORO HD con TC. Se suma como deco adicional, no reemplaza al principal. Instalación $16.500 + $12.720/mes, sin bonificación.",
    "Hot Pack (Super Lite y ORO HD con TC): lo marca el vendedor en la carga si el cliente lo quiere.",
    "Amazon Prime Video y DGO incluidos en todos los planes y con todos los medios de pago. Disney+ en ORO HD y ORO Plus HD. Dsports en Flex 1 y Flex 2. Fútbol Argentino incluido en Flex 2.",
    "Las promociones están sujetas a aumentos de precio."
  ],

  // Leyendas que salen al pie del presupuesto
  legales: [
    "Precios finales en pesos argentinos, vigentes al momento de la emisión.",
    "Las promociones están sujetas a aumentos de precio durante su vigencia.",
    "Los proporcionales del primer mes están bonificados.",
    "Sujeto a aprobación crediticia y a disponibilidad técnica en el domicilio."
  ]
};
