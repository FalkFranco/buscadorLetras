import { useState } from 'react'
import useLetras from '../hooks/UseLetras'


const Formulario = () => {

    const { setAlerta, busquedaletra } = useLetras(); // Use State para setear la alerta

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    const handleSubmit= e =>{
        e.preventDefault();
        if(Object.values(busqueda).includes('')){ //si hay algun campo vacio
            setAlerta('Coloca nombre de artista y canción'); //Setea el state con un mensaje de error
            return; //return para que no se siga ejecutando la funcion
        }

        busquedaletra(busqueda); //Si no hay campos vacios, se ejecuta la funcion busquedaletra
        
    }

  return (
    <div>
        <form 
        onSubmit={handleSubmit}
        >
            <legend>Busca por Artista y Canción</legend>
            <div className="form-grid">
                <div>
                    <label>Artista</label>
                    <input 
                        type="text"
                        name='artista' 
                        placeholder='Nombre artista'
                        value={busqueda.artista}
                        onChange= {e => setBusqueda({...busqueda, [e.target.name] : e.target.value})}
                    />
                </div>
                <div>
                    <label>Canción</label>
                    <input 
                        type="text"
                        name='cancion' 
                        placeholder='Nombre Canción'
                        value={busqueda.cancion}
                        onChange= {e => setBusqueda({...busqueda, [e.target.name] : e.target.value})}
                    />
                </div>
                <input type="submit" value='Buscar'/>
            </div>
        </form>
    </div>
  )
}

export default Formulario
