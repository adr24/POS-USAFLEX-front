
import { useState } from 'react';
import { Button } from '@nextui-org/react'


export default function App() {

  const [ numero, setNumero ] = useState(0);


  const increment = () => {
    
    setNumero( numero + 1 )
    
  }

  
  const decrement = () => {
    
    setNumero( numero - 1 )
    
  }

  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <h1 className="text-3xl font-bold">
        Contador
      </h1>

      <p className='text-5xl my-3'>{ numero }</p>

      <div className='flex gap-4 items-center'>
        <Button onClick={increment} >Sumar</Button>
        <Button onClick={() => setNumero(0)} >Reiniciar</Button>
        <Button onClick={decrement} >Restar</Button>
      </div>
    </div>

  )
}