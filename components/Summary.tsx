"use client"

import { SummaryCard } from "@/types/types"
import Card from "./Card"
import { useGetTotalValues } from "@/hooks/useGetTotalValues"
// import { useGetCurrentBalance } from "@/hooks/useGetTotalValues"



const Summary = () => {
    // const curr = useGetCurrentBalance()
    const { totalExpense, totalIncome, currentBal, loading, totalTransactions } = useGetTotalValues()
    const datas: SummaryCard[] = [
        {
            label: "Total Income",
            value: loading ? 0 : totalIncome
        },
        {
            label: "Total Expenses",
            value: loading ? 0 : totalExpense
        },
        {
            label: "Current Balance",
            value: loading ? 0 : currentBal
        },
    ]
    return (
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {datas.map((data, idx) => (
                <div key={idx}>
                    <Card label={data.label} value={data.value} />
                </div>
            ))}
            <section className="flex flex-col justify-between bg-[#1B1B1B] border border-[#2F2F2F] rounded-xl ">

                <div className="border-b border-[#2F2F2F]">
                    <h1 className="px-4 py-2 text-gray-400 text-sm md:text-lg">No. of Transactions</h1>
                </div>
                <div className="px-4 py-2 flex justify-between items-center">
                    <p className="text-white text-xl md:text-2xl">{loading ? 0 : totalTransactions}</p>

                </div>
            </section>
        </section>
    )
}

export default Summary