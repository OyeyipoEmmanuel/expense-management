"use client"
import { useState } from "react"

const Card = ({ label, value }: { label: string, value: number }) => {
  
  const [toggleValueVisibility, setToggleValueVisibility] = useState<boolean>(false)

  const handleShowHideToggle = () => {
    setToggleValueVisibility((prev) => !prev)
  }

  return (
    <section className="flex flex-col justify-between bg-[#1B1B1B] border border-[#2F2F2F] rounded-xl ">
      <div className="border-b border-[#2F2F2F]">
        <h1 className="px-4 py-2 text-gray-400 text-sm md:text-lg">{label}</h1>
      </div>
      <div className="px-4 py-2 flex justify-between items-center">
        <p className="text-white text-xl md:text-2xl">{toggleValueVisibility ? `****` : `$${value.toFixed(2)}`}</p>
        <span>
          <button
            className="text-xs text-gray-500 rounded-full border px-1 cursor-pointer"
            onClick={handleShowHideToggle}
          >
            {toggleValueVisibility ? "Show" : "Hide"}
          </button>
        </span>
      </div>
    </section>
  )
}

export default Card