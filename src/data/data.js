import fn1Img from "../assets/fn1.jpg";
import st1Img from "../assets/steps/st1.jpg";
import fn2Img from "../assets/fn2.png";
import fn3Img from "../assets/fn3.jpg";

export const NORMALITATION = {
  FN1: {
    title: "PRIMERA FORMA NORMAL",
    shortitle: "1FN",
    img: fn1Img,
    steps: [
      [st1Img,"Toda tabla debe llevar llave primaria, no es necesario que sea auto incrementable."],
      [st1Img,'No debe tener datos compuestos ejemplo -> "nombre completo".'],
      [st1Img, "No debe tener grupos repetitivos."],
      [st1Img, "Las columnas con un solo valor por fila."]
    ]
  },
  FN2: {
    title: "SEGUNDA FORMA NORMAL",
    shortitle:'2FN',
    img: fn2Img,
    steps: [[st1Img,'Eliminar campos parciales ejemplo -> "estado de un pedido que se define en una tabla".']]
  },
  FN3: {
    title: "TERCERA FORMA NORMAL",
    shortitle:'3FN',
    img: fn3Img,
    steps: [[st1Img,'Elimina dependencias transitorias ejemplo -> "relaciones innecesarias".']]
  }
};