# Promos y Presupuestos

App para vendedores con tres pantallas:

- **Promos**: todas las promos del mes por plan y medio de pago, por ahora solo Resto País (Patagonia y TDF están cargadas pero desactivadas con `activa: false` en `regiones`; antes de activarlas hay que confirmar sus precios, en especial Plus HD con TC). El botón "Cotizar →" arma el presupuesto ya cargado.
- **Presupuesto**: cliente + plan + medio de pago + decos (convencionales y Go Box) + adicionales → propuesta comercial lista para **Imprimir / Guardar PDF** o **Copiar para WhatsApp**. Es un resumen: plan, abono mensual (precio promo por X meses), decos, instalación, apps incluidas y beneficios. No muestra el detalle mes a mes.
- **Reglas**: condiciones de venta, beneficios en adicionales, premiums y PPV con buscador.

## Cómo abrirla

Abrí `index.html` con doble clic (Chrome o Edge). No necesita internet ni instalación.
Para usarla desde el celular, hay que subir la carpeta `app` a un hosting (por ejemplo, Netlify o GitHub Pages) y compartir el link.

Los datos del vendedor ("Mis datos") se guardan en cada dispositivo.

## Cómo actualizar cada mes

Solo se edita **`promos.js`**:

1. `mes`, `envio` y `vigenciaHasta` (fecha en la que vence el presupuesto).
2. En cada plan: `precio` (lista por región) y, en `promos`, los `tramos` de cada medio de pago (`tc`, `wc`, `ef`):
   `{ meses: 6, desc: "45%", precio: { resto: 29900, patagonia: 35375, tdf: 29236 } }`.
   Un medio de pago sin promo lleva `tramos: []`.
3. `instalacion`: costo por deco en orden (principal, 2°, 3°, 4°). `goBox` (solo donde se ofrece): `{ instalacion, abono }`.
   `apps` en cada plan: las apps incluidas que se muestran en Promos y en el presupuesto.
4. `adicionalesPromo`, `premiums`, `ppv`, `reglas` y `legales` si cambian.

Precios sin puntos ni signo `$`.

## Criterios del ciclo Noviembre 2026

- **Porcentajes**: se muestra el % que comunica la empresa (ej. Super Lite TC "35%"), aunque el precio real equivalga a otro (39,7%). El precio es el dato que manda.
- **Promos solo para Resto País**: los tramos tienen precio solo en `resto`. Patagonia y TDF están desactivadas; para activarlas hay que cargar sus precios promocionales.
- **Flex 1 y Flex 2**: solo TC y WC/TD (sin efectivo). El 2° deco paga instalación $16.500 y tiene el abono de $12.720 bonificado 8 meses (TC) o 6 meses (WC/TD).
- **Medios de pago por plan**: cada plan muestra solo los medios que tiene cargados en `promos`.
- **Abono mensual del presupuesto**: plan + premiums + decos con abono no bonificado. Universal+ y Full Service no suman (figuran en Beneficios).
- Se quitaron la Tarjeta Naranja y el segundo tramo del 20% de Super Lite.
