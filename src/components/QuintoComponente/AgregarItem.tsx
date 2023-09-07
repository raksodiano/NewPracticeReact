import { useState } from "react";

export const AgregarItem = ({ agregarItem }: any) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    agregarItem(inputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder={"Ingrese su item"}
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
