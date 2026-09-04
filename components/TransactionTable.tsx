"use client"

import useGetTransactions from "@/hooks/useGetTransactions"

const TransactionTable = () => {
    const { loading, transactions } = useGetTransactions()


    return (
        <section className="mt-8 bg-[#1B1B1B] rounded-xl w-full">
            <div className="border-b border-[#2F2F2F]">
                <h1 className="px-4 py-2 text-gray-400 text-sm md:text-lg">Transaction List</h1>
            </div>

            <div className="px-4 py-2 flex flex-row gap-4 w-full overflow-x-auto">
                <table className="min-w-xl md:w-full text-left text-sm text-gray-300">
                    <thead>
                        <tr className="border-b border-[#2F2F2F]">
                            <th className="px-2 py-3 font-bold uppercase">Desc</th>
                            <th className="px-2 py-3 font-bold uppercase">Amount</th>
                            <th className="px-2 py-3 font-bold uppercase">Type</th>
                            <th className="px-2 py-3 font-bold uppercase">Category</th>
                            <th className="px-2 py-3 font-bold uppercase">Date</th>
                        </tr>
                    </thead>


                    <tbody>
                        {loading && <h1 className="text-3xl text-white">Loading...</h1>}

                        {transactions.map((transaction) => (
                            <tr className="border-b border-[#2F2F2F]" key={transaction.id}>
                                <td className="px-2 py-3">{transaction.description}</td>
                                <td className="px-2 py-3">${transaction.amount}</td>
                                <td className={`px-2 py-3 ${transaction.type == "income" ? "text-green-400" : "text-red-400"}`}>{transaction.type}</td>
                                <td className="px-2 py-3">{transaction.category}</td>
                                <td className="px-2 py-3">{transaction.date}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default TransactionTable