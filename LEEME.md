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

## Datos a verificar en Octubre 2026

El PDF tiene inconsistencias; se tomó lo siguiente:

- **ORO Plus HD con TC**: confirmado $75.500 x 5 meses (precio comercial; el PDF dice "-40%", se muestra "-45%" que es lo que equivale sobre la lista).
- **ORO HD con TC**: confirmado 75% x 12 meses. La promo 60% x 6m + 30% x 6m es exclusiva de **Tarjeta Naranja** (medio de pago aparte, solo ORO HD, mismos decos que cualquier tarjeta).
- **Decos de ORO / Plus con TC**: la grilla es ambigua. Se interpretó: principal y 2° sin cargo, 3° y 4° $15.000, y en ORO HD el 2° deco tiene el abono bonificado 12 meses.
- **Universal+ (1 mes gratis + 75/50/25%)**: se asumió que el beneficio escalonado corresponde a Universal+ ($13.400).
- **Abono de deco adicional ($11.950)**: el PDF lo indica para Resto País; se usó el mismo valor para Patagonia y TDF.
