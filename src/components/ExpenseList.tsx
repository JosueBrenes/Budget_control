// src/components/ExpenseList.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

interface Expense {
  id: number;
  description: string;
  value: number;
}

interface ExpenseListProps {
  expenses: Expense[];
  deleteTransaction: (id: number) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({
  expenses,
  deleteTransaction,
}) => {
  return (
    <div className="egreso">
      <h2 className="egreso_titulo">Egresos</h2>
      <div id="lista-egresos">
        {expenses.map((expense) => (
          <div key={expense.id} className="elemento limpiarEstilos">
            <div className="elemento_descripcion">{expense.description}</div>
            <div className="derecha limpiarEstilos">
              <div className="elemento_valor">- {expense.value.toFixed(2)}</div>
              <div className="elemento_eliminar">
                <button
                  className="elemento_eliminar--btn"
                  onClick={() => deleteTransaction(expense.id)}
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

export default ExpenseList;
