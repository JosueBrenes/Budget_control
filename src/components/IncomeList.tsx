// src/components/IncomeList.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

interface Income {
  id: number;
  description: string;
  value: number;
}

interface IncomeListProps {
  incomes: Income[];
  deleteTransaction: (id: number) => void;
}

const IncomeList: React.FC<IncomeListProps> = ({
  incomes,
  deleteTransaction,
}) => {
  return (
    <div className="ingreso">
      <h2 className="ingreso_titulo">Ingresos</h2>
      <div id="lista-ingresos">
        {incomes.map((income) => (
          <div key={income.id} className="elemento limpiarEstilos">
            <div className="elemento_descripcion">{income.description}</div>
            <div className="derecha limpiarEstilos">
              <div className="elemento_valor">+ {income.value.toFixed(2)}</div>
              <div className="elemento_eliminar">
                <button
                  className="elemento_eliminar--btn"
                  onClick={() => deleteTransaction(income.id)}
                >
                  <FontAwesomeIcon icon={faTimesCircle} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomeList;
