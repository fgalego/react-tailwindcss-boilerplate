import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col h-screen items-center justify-center bg-[#1d1d1d]'>
      <div className='text-3xl font-semibold md:font-bold'>
        <h1 className='text-3xl md:text-6xl md:!leading-[5rem] text-orange-400  max-w-4xl'>
          Vite + React + TailwindCSS
        </h1>
      </div>
      <p className='flex items-center justify-center mt-0 md:text-xl font-semibold text-[#248a5f]'>
        + ESLint + Prettier
      </p>
      <p className='md:text-3xl font-semibold text-[#1b739c] m-6'>
        <span className='md:text-xl'>🧀</span> Boilerplate <span className='md:text-xl'>🧀</span>
      </p>
    </div>
  )
}

export default App
