import fn1Img from "../assets/fn1.jpg";
import st1Img from "../assets/steps/step1.png";
import st2Img from "../assets/steps/step2.png";
import st3Img from "../assets/steps/step3.png";
import st4Img from "../assets/steps/step4.png";
import fn2Img from "../assets/fn2.png";
import st5Img from "../assets/steps/step5.png";
import fn3Img from "../assets/fn3.jpg";
import st6Img from "../assets/steps/step6.png";

export const NORMALITATION = {
  FN1: {
    title: "PRIMERA FORMA NORMAL",
    shortitle: "1FN",
    img: fn1Img,
    steps: [
      [st1Img,"Toda tabla debe llevar llave primaria, no es necesario que sea auto incrementable."],
      [st2Img,'No debe tener datos compuestos ejemplo 👉 "nombre completo".'],
      [st3Img, "No debe tener grupos repetitivos."],
      [st4Img, "Las columnas con un solo valor por fila."]
    ]
  },
  FN2: {
    title: "SEGUNDA FORMA NORMAL",
    shortitle:'2FN',
    img: fn2Img,
    steps: [[st5Img,'Eliminar campos parciales ejemplo 👉 "estado de un pedido que se define en una tabla".']]
  },
  FN3: {
    title: "TERCERA FORMA NORMAL",
    shortitle:'3FN',
    img: fn3Img,
    steps: [[st6Img,'Elimina dependencias transitorias ejemplo 👉 "relaciones innecesarias".']]
  }
};