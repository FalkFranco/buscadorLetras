import Formulario from "./Formulario"
import Alerta from "./Alerta";
import useLetras from "../hooks/UseLetras"
import Letra from "./Letra";
import Spinner from "./Spinner";



const AppLetras = () => {

  const {alerta, letra, cargando} = useLetras(); // Use State para acceder a la alerta, letra y cargando

  return (
    <>
        <header>
            Busqueda de letras de canciones
        </header>
        <Formulario />
            <main>
                {alerta ? <Alerta > {alerta} </Alerta> : 
                 letra ? <Letra /> : 
                 cargando ? <Spinner />  :
                 <p className="text-center">Busca Letras de tus artistas Favoritos</p>}	
                
            </main>
    </>
  )
}

export default AppLetras