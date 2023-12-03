import React from 'react'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
        <h1 className='text-center pb-3 heading md:pb-5'>Your gate to the <br />trustless web</h1>
        <h2 className="text-center text-texting-secondary pb-7 text-base md:text-2xl md:pb-10">Focus on your getting your thoughts out.</h2>
        <div className='relative'>
          <div className='glow-circle absolute top-0 left-[20%]' />
          <div className='glow-circle absolute top-0 right-[20%]' />
          <Button>Build now</Button>
        </div>
    </section>
  )
}

export default Hero