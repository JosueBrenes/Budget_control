// src/components/Budget.tsx
import React from "react";

interface BudgetProps {
  budget: number;
  totalIncome: number;
  totalExpense: number;
}

const Budget: React.FC<BudgetProps> = ({
  budget,
  totalIncome,
  totalExpense,
}) => {
  const expensePercentage = totalExpense
    ? ((totalExpense / totalIncome) * 100).toFixed(2)
    : 0;

  return (
    <div className="presupuesto">
      <div className="presupuesto_titulo">Presupuesto Disponible</div>
      <div className="presupuesto_valor">{budget.toFixed(2)}</div>
      <div className="presupuesto_ingreso limpiarEstilos">
        <div className="presupuesto_ingreso--texto">Ingresos</div>
        <div className="derecha">
          <div className="presupuesto_ingreso--valor">
            {totalIncome.toFixed(2)}
          </div>
          <div className="presupuesto_ingreso--porcentaje">&nbsp;</div>
        </div>
      </div>
      <div className="presupuesto_egreso limpiarEstilos">
        <div className="presupuesto_egreso--texto">Egresos</div>
        <div className="derecha limpiarEstilos">
          <div className="presupuesto_egreso--valor">
            - {totalExpense.toFixed(2)}
          </div>
          <div className="presupuesto_egreso--porcentaje">
            {expensePercentage}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
