import { useState, createContext } from "react";
import axios from "axios";

const LetrasContext = createContext();

const LetrasProvider = ({children}) => {

    const [alerta, setAlerta] = useState('');
    const [letra, setLetra] = useState('');
    const [cargando, setCargando] = useState(false);

    const busquedaletra = async (busqueda) =>{
        setCargando(true);
        try {
            const {artista, cancion} = busqueda;
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
            const { data } = await axios(url); //Se ejecuta la peticion a la API  axios.get(url) = axios(url) - Es el default de axios 
                                                // Se puede usar destructuring para acceder a los datos a la vez que realiza la peticion
            setLetra(data.lyrics);
            setAlerta(''); //Si no hay campos vacios, se limpia el state
        } catch (error) {
            setAlerta('Canción no encontrada');
        }
        setCargando(false);
    }

    return (
        <LetrasContext.Provider
            value ={{
                alerta,
                setAlerta,
                busquedaletra,
                letra,
                cargando
            }}
        >
            {children}
        </LetrasContext.Provider>
    )
}

export {
    LetrasProvider
}
export default LetrasContext