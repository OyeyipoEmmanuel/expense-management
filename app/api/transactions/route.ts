import { transactionsData } from "@/data/transactions"

export const dynamic = 'force-static'

 
export const GET = async ()=>{
    return new Response(JSON.stringify(transactionsData))
}