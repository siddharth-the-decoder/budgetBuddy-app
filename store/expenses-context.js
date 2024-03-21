import React, { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A Pair of Shoes",
    amount: 3000.88,
    date: new Date("2023-12-19"),
  },
  {
    id: "e2",
    description: "A Pair of Trousers",
    amount: 2150.98,
    date: new Date("2024-01-26"),
  },
  {
    id: "e3",
    description: "Bananas",
    amount: 200,
    date: new Date("2024-01-28"),
  },
  {
    id: "e4",
    description: "Books",
    amount: 500,
    date: new Date("2024-02-02"),
  },
  {
    id: "e5",
    description: "Another Book",
    amount: 300,
    date: new Date("2024-02-15"),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateableExpense = state[updateableExpenseIndex];
      const updatedItem = { ...updateableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({
      type: "ADD",
      payload: expenseData,
    });
  }
  function deleteExpense(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }
  function updateExpense(id, expenseData) {
    dispatch({
      type: "UPDATE",
      payload: { id: id, data: expenseData },
    });
  }
  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}
export default ExpensesContextProvider;
