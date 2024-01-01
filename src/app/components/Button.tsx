import React from 'react'

const Button = ({children } : { children: React.ReactNode }) => {
  return (
    <button className="px-6 md:px-5 py-2 md:w-[150px] md:py-3 text-center text-base md:text-xl bg-white text-black border-2 md:border-4 border-[#FFBABA] rounded-xl md:rounded-xl">
        {children}
    </button>
  )
}

export default Button