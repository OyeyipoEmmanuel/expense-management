import Summary from "@/components/Summary";
import TransactionTable from "@/components/TransactionTable";
import PieChartWithCustomizedLabel from "@/components/PieChart";

export default function Home() {
  const username: string = "Emmanuel"
  return (
    <main className="p-6">
      <h1 className="text-white font-semibold text-3xl">Hello, {username}</h1>

      <section className="py-8">
        <Summary />

        <div className="pt-16">
          <h1 className="text-white font-semibold text-3xl">Transaction List</h1>

          <TransactionTable />
        </div>

        <div className="pt-16">
          <PieChartWithCustomizedLabel />
        </div>

      </section>
    </main>
  );
}
