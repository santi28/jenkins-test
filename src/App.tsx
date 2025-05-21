import { useState } from 'react'
import reactLogo from './assets/react.svg'
import JenkinsLogo from './assets/jenkins.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-zinc-800 h-screen text-white flex flex-col items-center">
      <img src={JenkinsLogo} className='mt-20' />
      <h1 className='text-5xl'>
        <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>CI/CD </span>
        with jenkins and docker
      </h1>

      <div className='w-full max-w-sm mt-5'>
        <h2 className='text-xl'>Variables de entorno</h2>
        <h3><span className='font-bold'>Enviroment:</span> {import.meta.env.MODE}</h3>
        <h3><span className='font-bold'>DB Access:</span> {import.meta.env.VITE_DB_URI}</h3>
      </div>
    </div>
  )
}

export default App
