import { useState } from "react";
import { AgregarItem } from "./AgregarItem";

interface values {
  key?: string;
  name: string;
  value: boolean;
}

const Items = ({ name, value }: values) => {
  return (
    <li>
      {name}
      {value ? "✅️️" : "⛔"}
    </li>
  );
};

export const QuintoComponente = () => {
  const addToList = () => {
    setArreglo([...arreglo, { name: "Lucie Doll", value: true }]);
  };
  const listadoPrimitivo: object[] = [
    { id: 1, name: "Lisa Sparxxx", value: true },
    { id: 2, name: "Mia Khalifa", value: true },
    { id: 3, name: "Ana Lisa", value: false },
    { id: 4, name: "Mia Malkovaf", value: true },
    { id: 5, name: "Ana Doll", value: false },
  ];

  const [arreglo, setArreglo] = useState(listadoPrimitivo);

  const onAgregarItem = (val: any) => {
    const valor = val.trim();

    if (valor < 1) return;

    const envio = {
      id: arreglo.length + 1,
      name: valor,
      value: false,
    };

    setArreglo([...arreglo, envio]);
  };

  return (
    <>
      <h1> Quinto componente</h1>
      <AgregarItem agregarItem={onAgregarItem}></AgregarItem>
      <ol>
        {arreglo.map((item: any) => (
          <Items key={item.id} name={item.name} value={item.value}></Items>
        ))}
      </ol>
    </>
  );
};
