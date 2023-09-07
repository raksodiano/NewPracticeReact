import { SegundoComponenteInterfaces } from "../../interfaces/SegundoComponenteInterfaces";

export const SegundoComponente = (props: SegundoComponenteInterfaces) => {
  return (
    <>
      <h1> Segundo componente</h1>
      <h2>Name: {props.name}</h2>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
      <h2>Sex: {props.sex? "Machirulo" : "Mujerzuela"}</h2>
    </>
  );
};

SegundoComponente.defaultProps = {
  sex: true
}
