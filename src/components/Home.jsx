import React from "react";
import { useState } from "react";
import CardPizza from "./CardPizza";
import Header from "./Header";
import { pizzas } from "../pizzas";

function Home() {
  const [listaPizzas, setListaPizzas] = useState(pizzas);

  // Función al enviar el formulario
  const enviarFormulario = (e) => {
    e.preventDefault();
    setListaPizzas([
      ...listaPizzas,
      {
        nombre: pizza.nombre,
        precio: pizza.precio,
        ingredientes: pizza.ingredientes,
        img: pizza.img,
      },
    ]);
    setPizza(""); // Vaciamos el formulario
  };

  return (
    <main className="home">
      <Header />

      <div className="pizza-listado">
        {listaPizzas.map((pizza, index) => (
          <CardPizza key={index} {...pizza} />
        ))}
      </div>
    </main>
  );
}

export default Home;
