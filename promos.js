/*
 * CICLO COMERCIAL — datos del mes.
 * Este es el ÚNICO archivo que hay que editar cada mes (ver LEEME.md).
 * Precios en pesos, sin puntos ni signos.
 * Fuente: "Ciclo Comercial Pospago Resto País Octubre 2026.pdf" (envío 30-09-2026).
 */
window.CICLO = {
  mes: "Octubre 2026",
  envio: "30-09-2026",
  vigenciaHasta: "2026-10-31",

  regiones: [
    { id: "resto", nombre: "Resto País", activa: true },
    // Desactivadas por ahora. Para habilitarlas: activa: true (revisar antes sus precios, ver LEEME.md).
    { id: "patagonia", nombre: "Patagonia", activa: false },
    { id: "tdf", nombre: "Tierra del Fuego", activa: false }
  ],

  // Medios de pago
  mops: [
    { id: "tc", nombre: "Tarjeta de crédito", corto: "TC", riesgoAlto: true },
    // Solo aparece en los planes que tienen promo "naranja" cargada (hoy, ORO HD)
    { id: "naranja", nombre: "Tarjeta Naranja", corto: "Naranja", riesgoAlto: true, soloConPromo: true },
    { id: "wc", nombre: "Wallet Connect / Débito", corto: "WC / TD", riesgoAlto: false },
    { id: "ef", nombre: "Efectivo", corto: "EF", riesgoAlto: false }
  ],

  // Abono mensual de cada deco adicional (mirror / Go Box)
  abonoDecoAdicional: 11950,
  maxDecos: 4,

  planes: [
    {
      id: "superlite",
      nombre: "Super Lite HD",
      bajada: "+ Amazon Prime Video",
      incluye: ["Señal HD"],
      apps: ["Amazon Prime Video", "DGO"],
      precio: { resto: 54390, patagonia: 64350, tdf: 53182 },
      maxDecos: 2, // "Mirror 3° y 4° no aplican"
      adicionales: ["universal", "fslite", "hotpack"],
      promos: {
        tc: {
          tramos: [
            { meses: 6, desc: "45%", precio: { resto: 29900, patagonia: 35375, tdf: 29236 } },
            { meses: 6, desc: "20%", precio: { resto: 43512, patagonia: 51480, tdf: 42545 } }
          ],
          instalacion: [0, 0], // precio por deco: principal, 2do
          textoDecos: "Deco principal $0 (2x1) · 2do deco $0"
        },
        wc: {
          tramos: [
            { meses: 6, desc: "25%", precio: { resto: 39900, patagonia: 47207, tdf: 39014 } },
            { meses: 6, desc: "20%", precio: { resto: 43512, patagonia: 51480, tdf: 42545 } }
          ],
          instalacion: [15000, 15000],
          textoDecos: "Deco principal $15.000 · 2do deco $15.000"
        },
        ef: {
          tramos: [
            { meses: 6, desc: "Congelado", precio: { resto: 45500, patagonia: 45500, tdf: 45500 } },
            { meses: 6, desc: "20%", precio: { resto: 43512, patagonia: 51480, tdf: 42545 } }
          ],
          instalacion: [15000, 15000],
          textoDecos: "Deco principal $15.000 · 2do deco $15.000"
        }
      }
    },
    {
      id: "oro",
      nombre: "ORO HD",
      bajada: "+ Disney+ y Amazon Prime Video",
      incluye: ["Señal HD"],
      apps: ["Amazon Prime Video", "Disney+", "DGO"],
      precio: { resto: 120910, patagonia: 140735, tdf: 116310 },
      maxDecos: 4,
      adicionales: ["universal", "fullservice", "hotpack"],
      promos: {
        tc: {
          tramos: [
            { meses: 12, desc: "75%", precio: { resto: 29900, patagonia: 34802, tdf: 28762 } }
          ],
          instalacion: [0, 0, 15000, 15000],
          bonifAbonoDeco: { deco: 2, meses: 12 }, // 2do deco convencional con abono bonificado 100% x 12m
          // Go Box (deco Android para TV no Smart): se suma como adicional, nunca es el principal. Sin bonificación.
          goBox: { instalacion: 15000, abono: 11950 },
          textoDecos: "Deco principal $0 (2x1) · 2do deco $0 con abono bonificado 100% x 12 meses · 3° y 4° $15.000 · Go Box $15.000 + $11.950/mes"
        },
        naranja: {
          // Promo exclusiva para clientes con Tarjeta Naranja. Decos: mismas condiciones que cualquier tarjeta.
          tramos: [
            { meses: 6, desc: "60%", precio: { resto: 48364, patagonia: 56294, tdf: 46524 } },
            { meses: 6, desc: "30%", precio: { resto: 84637, patagonia: 98515, tdf: 81417 } }
          ],
          instalacion: [0, 0, 15000, 15000],
          bonifAbonoDeco: { deco: 2, meses: 12 },
          goBox: { instalacion: 15000, abono: 11950 },
          textoDecos: "Deco principal $0 (2x1) · 2do deco $0 con abono bonificado 100% x 12 meses · 3° y 4° $15.000 · Go Box $15.000 + $11.950/mes"
        },
        wc: {
          tramos: [
            { meses: 12, desc: "60%", precio: { resto: 44900, patagonia: 52262, tdf: 43192 } }
          ],
          instalacion: [15000, 15000, 15000, 15000],
          textoDecos: "Cada deco $15.000"
        },
        ef: {
          tramos: [],
          instalacion: [15000, 15000, 15000, 15000],
          textoDecos: "Cada deco $15.000"
        }
      }
    },
    {
      id: "plus",
      nombre: "ORO Plus HD",
      bajada: "+ Disney+ y Amazon Prime Video",
      incluye: ["Grilla Plus en HD"],
      apps: ["Amazon Prime Video", "Disney+", "DGO"],
      precio: { resto: 136130, patagonia: 156890, tdf: 129661 },
      maxDecos: 4,
      adicionales: ["universal", "fullservice"],
      promos: {
        tc: {
          // Precio comercial $75.500 (el PDF dice "-40%", pero sobre la lista equivale a ~45%).
          // Patagonia y TDF: valores PENDIENTES de confirmar (son los de la tabla de $77.500).
          tramos: [
            { meses: 5, desc: "45%", precio: { resto: 75500, patagonia: 89319, tdf: 73817 } }
          ],
          instalacion: [0, 0, 15000, 15000],
          textoDecos: "Deco principal $0 · 2do deco $0 · 3° y 4° $15.000"
        },
        wc: {
          tramos: [],
          instalacion: [15000, 15000, 15000, 15000],
          textoDecos: "Cada deco $15.000"
        },
        ef: {
          tramos: [],
          instalacion: [15000, 15000, 15000, 15000],
          textoDecos: "Cada deco $15.000"
        }
      }
    }
  ],

  /*
   * Adicionales con beneficio promocional.
   * esquema: meses con % de descuento sobre el precio vigente; después sigue a precio vigente.
   * soloMop: si el beneficio aplica solo a ciertos medios de pago.
   */
  adicionalesPromo: {
    universal: {
      nombre: "Universal+",
      precio: 13400,
      porDefecto: true,
      esquema: [ { meses: 1, desc: 100 }, { meses: 2, desc: 75 }, { meses: 2, desc: 50 }, { meses: 2, desc: 25 } ],
      texto: "1 mes gratis + 2 meses 75% off + 2 meses 50% off + 2 meses 25% off"
    },
    fullservice: {
      nombre: "Full Service",
      precio: 10520,
      porDefecto: true,
      esquema: [ { meses: 1, desc: 100 }, { meses: 2, desc: 50 } ],
      texto: "1 mes bonificado + 2 meses 50% off"
    },
    fslite: {
      nombre: "Full Service Lite",
      precio: 2520,
      porDefecto: true,
      esquema: [ { meses: 1, desc: 100 }, { meses: 2, desc: 50 } ],
      texto: "1 mes bonificado + 2 meses 50% off"
    },
    hotpack: {
      nombre: "Hot Pack",
      precio: 14000,
      porDefecto: false,
      soloMop: ["tc", "naranja"],
      esquema: [ { meses: 1, desc: 100 }, { meses: 2, desc: 50 } ],
      texto: "Con TC, seleccionándolo en la carga: 1 mes gratis + 2 meses 50% off"
    }
  },

  premiums: [
    { nombre: "HBO Pack HD", precio: 13500 },
    { nombre: "HBO Max HD", precio: 13500 },
    { nombre: "Fútbol Argentino", precio: 26960 },
    { nombre: "Fútbol Paraguayo", precio: 10700 },
    { nombre: "Paramount+", precio: 6750 },
    { nombre: "Globo", precio: 15100 },
    { nombre: "NHK", precio: 14600 },
    { nombre: "Zee TV", precio: 14600 },
    { nombre: "VTV", precio: 6100 },
    { nombre: "Playboy", precio: 14000 },
    { nombre: "Venus", precio: 11200 },
    { nombre: "Hustler", precio: 11200 },
    { nombre: "XTSY", precio: 11200 },
    { nombre: "EXXXOTICO", precio: 13100 }
  ],

  ppv: [
    { nombre: "PPV Librería HD", precio: 3510 },
    { nombre: "Linear HD PPV New Titles", precio: 5120 },
    { nombre: "Prem Win Linear HD PPV", precio: 5880 },
    { nombre: "Linear SD PPV New Titles", precio: 4510 },
    { nombre: "Premium Window Linear PPV", precio: 5510 },
    { nombre: "Adultos IPPV (WEB/IVR/SMS)", precio: 5700 },
    { nombre: "Adicional OPPV (telefónica)", precio: 1490 },
    { nombre: "Primary Super Premium SD & HD", precio: 14810 },
    { nombre: "PPV Fútbol SD / HD", precio: 19370 },
    { nombre: "PPV Pack 2 Películas", precio: 6380 },
    { nombre: "PPV HD Movie Combo Promotion", precio: 5120 },
    { nombre: "50% Discount PPV Promotion HD", precio: 2880 },
    { nombre: "Secondary Super Prem SD & HD", precio: 13460 },
    { nombre: "Ext-VOD WB SD & HD", precio: 5700 }
  ],

  // Reglas para el vendedor (no salen en el presupuesto)
  reglas: [
    "Los proporcionales están bonificados para todas las altas.",
    "Score con riesgo alto: no ingresa por EF, Wallet Connect ni TD. Solo TC.",
    "Tarjeta Naranja (solo ORO HD): 60% x 6 meses + 30% x 6 meses. Solo si el cliente tiene Tarjeta Naranja. Decos igual que cualquier tarjeta.",
    "La promo con TC aplica a todos los scores, sujeta a mantener la tarjeta como medio de pago.",
    "Vendedores viajantes: solo pueden vender promociones con TC.",
    "Máximo 4 decodificadores por cuenta. En Super Lite, el 3° y 4° no aplican.",
    "Abono mensual de cada mirror o Go Box: $11.950 (Resto País).",
    "Go Box (deco Android para TV no Smart): solo ORO HD con TC. Se suma como deco adicional, no reemplaza al principal. Instalación $15.000 + $11.950/mes, sin bonificación.",
    "Amazon Prime Video y DGO incluidos en todos los planes y con todos los medios de pago. Disney+ en ORO HD y ORO Plus HD.",
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
