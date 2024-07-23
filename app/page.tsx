import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import Guest from "@/components/Guest";
import IncomeExpense from "@/components/IncomeExpenses";
import { currentUser } from "@clerk/nextjs/server";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }
  return (
    <main>
      <h1>Welcome, {user.firstName}</h1>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
    </main>
  );
};

export default HomePage;
