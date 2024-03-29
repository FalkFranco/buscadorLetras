import React from 'react'
import useLetras from '../hooks/UseLetras'

const Letra = () => {
    const {letra} = useLetras();
  return (
    <div className='letra'>{letra}</div>
  )
}

export default Letra