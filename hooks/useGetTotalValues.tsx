"use client"

import useGetTransactions from "@/hooks/useGetTransactions"


export const useGetTotalValues = () => {
    const { loading, transactions } = useGetTransactions()


    let totalIncome = 0
    let totalExpense = 0


    transactions.map((each) => {
        if (each.type == "income") {
            totalIncome += each.amount
        }

        if (each.type == "expense") {
            totalExpense += each.amount
        }
    })

    let currentBal = totalIncome - totalExpense
    let totalTransactions = transactions.length

    return { totalIncome, totalExpense, currentBal, loading, totalTransactions}

}
