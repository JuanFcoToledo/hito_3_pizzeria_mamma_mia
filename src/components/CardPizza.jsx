import React from "react";

function CardPizza({ nombre, precio, ingredientes, img }) {
  return (
    <div className="card">
      <img src={img} alt={nombre} className="card-img" />
      <div className="card-body">
        <h2 className="card-titulo">{nombre}</h2>
        <div class="separacion"></div>
        <p className="card-ingredientes-titulo">
          <strong>Ingredientes:</strong>
        </p>
        {/* <p className="card-ingredientes">🍕 {ingredientes.join(", ")}</p> */}
        <ul className="card-ingredientes lista-ingredientes">
          {ingredientes.map((ingrediente, index) => (
            <li key={index}>
              {ingrediente}
              {index !== ingredientes.length - 1 && ","}{" "}
            </li>
          ))}
        </ul>
        <div class="separacion"></div>
        <p className="card-precio">${precio.toLocaleString()} </p>
        <div className="container-fluid d-flex justify-content-between">
          <div>
            <button
              style={{ color: "black" }}
              className="btn btn-outline-light mx-2"
            >
              Ver más 👀
            </button>
          </div>
          <div>
            <button className="btn btn-dark mx-2">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
