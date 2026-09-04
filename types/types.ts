export type SummaryCard = {
    label: string
    value: number
}

export type Transaction = {
    id: string
    description: string
    amount: number
    type: "income" | "expense"
    category: string
    date: string
}