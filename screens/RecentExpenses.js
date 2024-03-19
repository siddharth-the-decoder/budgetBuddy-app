import { Text } from "react-native";
import ExpensesOutput from "../components/ExpenseOutput/ExpensesOutput";
function RecentExpenses() {
  return <ExpensesOutput expensesPeriod="Last 7 days" />;
}

export default RecentExpenses;
