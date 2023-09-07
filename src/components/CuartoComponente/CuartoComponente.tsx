import { useState } from "react";
import {AgregarItem} from "./AgregarItem";

interface values {
  key: string;
  name: string;
  value: boolean;
}

const Items = ({ key, name, value }: values) => {
  return (
    <li>
      {name}
      {value ? "✅️️" : "⛔"}
    </li>
  );
};

export const CuartoComponente = () => {
  const addToList = () => {
    setArreglo([...arreglo, { name: "Lucie Doll", value: true }]);
  };
  const listadoPrimitivo: object[] = [
    { name: "Lisa Sparxxx", value: true },
    { name: "Mia Khalifa", value: true },
    { name: "Ana Lisa", value: false },
    { name: "Mia Malkovaf", value: true },
    { name: "Ana Doll", value: false },
  ];

  const [arreglo, setArreglo] = useState(listadoPrimitivo);

  return (
    <>
      <h1> Cuarto componente</h1>
      <AgregarItem agregarItem={setArreglo}></AgregarItem>
      <ol>
        {arreglo.map((item: any) => (
          <Items key={item.name} name={item.name} value={item.value}></Items>
        ))}
      </ol>

      <button onClick={addToList}>Picale we</button>
    </>
  );
};
