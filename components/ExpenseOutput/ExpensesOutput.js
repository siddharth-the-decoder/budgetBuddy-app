import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

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

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
