// src/App.tsx
import React, { useState, useEffect } from "react";
import Budget from "./components/Budget";
import AddExpenseForm from "./components/AddExpenseForm";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";

interface Transaction {
  id: number;
  description: string;
  value: number;
  type: "ingreso" | "egreso";
}

const App: React.FC = () => {
  // Cargar los datos de LocalStorage
  const initialTransactions = JSON.parse(
    localStorage.getItem("transactions") || "[]"
  );

  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);

  // Guardar los datos en LocalStorage cuando las transacciones cambien
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (
    type: "ingreso" | "egreso",
    description: string,
    value: number
  ) => {
    const newTransaction: Transaction = {
      id: transactions.length + 1,
      type,
      description,
      value,
    };
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id: number) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "ingreso")
    .reduce((acc, transaction) => acc + transaction.value, 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === "egreso")
    .reduce((acc, transaction) => acc + transaction.value, 0);

  const availableBudget = totalIncome - totalExpense;

  return (
    <div className="App">
      <div className="cabecero">
        <Budget
          budget={availableBudget}
          totalIncome={totalIncome}
          totalExpense={totalExpense}
        />
      </div>
      <AddExpenseForm addTransaction={addTransaction} />
      <div className="contenedor limpiarEstilos">
        <IncomeList
          incomes={transactions.filter(
            (transaction) => transaction.type === "ingreso"
          )}
          deleteTransaction={deleteTransaction}
        />
        <ExpenseList
          expenses={transactions.filter(
            (transaction) => transaction.type === "egreso"
          )}
          deleteTransaction={deleteTransaction}
        />
      </div>
    </div>
  );
};

export default App;
