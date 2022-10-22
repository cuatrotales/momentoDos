import { useState } from "react";

export default function Form() {
  // variables y/o constantes
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [noteOne, setNoteOne] = useState("");
  const [noteTwo, setNoteTwo] = useState("");
  const [noteThree, setNoteThree] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [definitiva, setDefinitiva] = useState("");

  // Funcion
  function handleSubmit(event) {
    event.preventDefault();
    if (
      id !== "" &&
      name !== "" &&
      course !== "" &&
      noteOne !== "" &&
      noteTwo !== "" &&
      noteThree !== "" &&
      observaciones !== ""
    ) {
      if (
        noteOne < 0 ||
        noteOne > 5 ||
        noteTwo < 0 ||
        noteTwo > 5 ||
        noteThree < 0 ||
        noteThree > 5
      ) {
        alert("Las notas deben ser mayores que 0 y menores que 5");
      } else {
        setDefinitiva(
          parseFloat(noteOne * 0.3) +
            parseFloat(noteTwo * 0.35) +
            parseFloat(noteThree * 0.35)
        );
      }
    } else {
      alert("Todos los datos son obligatorios");
    }
  }

  function limpiar() {
    setId("");
    setName("");
    setCourse("");
    setNoteOne("");
    setNoteTwo("");
    setNoteThree("");
    setObservaciones("");
    setDefinitiva("");
  }
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-6 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Sistema de Notas</h1>
          <p className="fs-4">
            En este sistema vas a poder ingresar tus notas y calcular el valor
            total de tu semestre. Recuerda diligenciar toda la informacion.
          </p>
        </div>
        <div className="col-sm-12 col-md-6 mx-auto">
          <form className="p-4 shadow rounded-3 bg-light">
            <h1 className="lead text-center mb-5">Formulario de notas</h1>
            <div className="form-floating   mb-3">
              <input
                type="text"
                id="id"
                name="id"
                className="form-control"
                placeholder="1001011144"
                onChange={(e) => setId(e.target.value)}
                value={id}
              />
              <label htmlFor="identificacion">Identificacion</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Juan Felipe Quintero Gutierrez"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label htmlFor="nombre">Nombre</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                id="course"
                name="course"
                className="form-control"
                placeholder="Web II"
                onChange={(e) => setCourse(e.target.value)}
                value={course}
              />
              <label htmlFor="asignatura">Asignatura</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                id="noteOne"
                name="noteOne"
                className="form-control"
                placeholder="4.0"
                maxLength={1}
                onChange={(e) => setNoteOne(e.target.value)}
                value={noteOne}
              />
              <label htmlFor="notaUno">Nota 1 (30%)</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                id="noteTwo"
                name="noteTwo"
                className="form-control"
                placeholder="4.0"
                maxLength={1}
                onChange={(e) => setNoteTwo(e.target.value)}
                value={noteTwo}
              />
              <label htmlFor="notaDos">Nota 2 (35%)</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                id="noteThree"
                name="noteThree"
                className="form-control"
                placeholder="4.0"
                maxLength={1}
                onChange={(e) => setNoteThree(e.target.value)}
                value={noteThree}
              />
              <label htmlFor="notaTres">Nota 3 (35%)</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                cols="30"
                rows="10"
                id="noteTwo"
                name="noteTwo"
                className="form-control"
                placeholder="4.0"
                onChange={(e) => setObservaciones(e.target.value)}
                value={observaciones}
              ></textarea>
              <label htmlFor="observaciones">Observaciones</label>
            </div>
            <button
              className="mx-2 btn btn-md btn-success"
              onClick={handleSubmit}
            >
              Calcular
            </button>
            <button className="mx-2 btn btn-md btn-primary" onClick={limpiar}>
              Limpiar
            </button>
            <hr className="my-4" />
            <div className="form-floating mb-3">
              <input
                type="number"
                id="noteThree"
                name="noteThree"
                className="form-control"
                placeholder="Nota definitiva"
                readOnly
                onChange={(e) => setDefinitiva(e.target.value)}
                value={definitiva}
              />
              <label htmlFor="noteThree">Defintiva</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
