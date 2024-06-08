import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidV4 } from "uuid";
const Formulario = ({ tareas, setTareas }) => {
  const [tareaInput, setTareaInput] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();

    let nuevaTarea = { id: uuidV4(), tarea: tareaInput, completada: false };

    const isPresent = tareas.some(
      (t) =>
        t.id === nuevaTarea.id &&
        t.tarea.trim().toLowerCase() === nuevaTarea.tarea.trim().toLowerCase()
    );

    if (!isPresent) {
      setTareas([...tareas, nuevaTarea]);
    }
    setTareaInput("");
  };

  const handlerInput = (e) => {
    setTareaInput(e.target.value);
  };

  return (
    <form action="" className="formulario-tareas" onSubmit={handlerSubmit}>
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="Escribe una Tarea"
        value={tareaInput}
        onChange={handlerInput}
      />

      <button className="formulario-tareas__btn" type="submit">
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="formulario-tareas__icono-btn"
        />
      </button>
    </form>
  );
};

export default Formulario;
