 import { useContext } from "react"; //Importar useContext
 import LetrasContext from "../context/LetrasProvider"; // Importar el provider

 //Definir Hook
 const useLetras = () =>{
    return useContext(LetrasContext); //Retornar el contexto
 }

 export default useLetras; // Exportar el Hook