import React from 'react'

const Button = ({children} : { children: React.ReactNode}) => {
  return (
    <button className="px-6 md:px-9 py-2 md:w-[200px] md:py-4 text-center text-xl md:text-2xl bg-white text-black border-2 md:border-4 border-[#FFBABA] rounded-xl md:rounded-2xl">
        {children}
    </button>
  )
}

export default Button