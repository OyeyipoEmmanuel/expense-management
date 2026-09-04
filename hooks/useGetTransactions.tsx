"use client";

import { Transaction } from "@/types/types";
import { useEffect, useState } from "react";

const useGetTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true)

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transactions`);

        if (!res.ok) {
          throw new Error("Failed to fetch transactions");
        }

        const data = await res.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions()

    const interval = setInterval(fetchTransactions, 15*60*60)

    return ()=> clearInterval(interval)
  }, []);

  return { transactions, loading };
};

export default useGetTransactions;