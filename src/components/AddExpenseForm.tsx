// src/components/AddExpenseForm.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

interface AddExpenseFormProps {
  addTransaction: (
    type: "ingreso" | "egreso",
    description: string,
    value: number
  ) => void;
}

const AddExpenseForm: React.FC<AddExpenseFormProps> = ({ addTransaction }) => {
  const [type, setType] = useState<"ingreso" | "egreso">("ingreso");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTransaction(type, description, value);
    setDescription("");
    setValue(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="agregar">
        <div className="agregar_contenedor">
          <select
            className="agregar_tipo"
            value={type}
            onChange={(e) => setType(e.target.value as "ingreso" | "egreso")}
          >
            <option value="ingreso">+</option>
            <option value="egreso">-</option>
          </select>
          <input
            type="text"
            className="agregar_descripcion"
            placeholder="Agregar Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            className="agregar_valor"
            placeholder="Valor"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            step="any"
            min={0}
          />
          <button className="agregar_btn" type="submit">
            <FontAwesomeIcon icon={faCheckCircle} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
