import { useState } from "react";

interface values {
  value: number;
}

export const TercerComponente = ({ value }: values) => {
  const [contador, setContador] = useState(value);

  const handlerClick = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <h1> Tercer componente</h1>
      <h2>Value: {contador}</h2>
      <button onClick={handlerClick}>Picale we, no muerdo</button>
    </>
  );
};
