import axios from "axios"
const generarToken = async () => {
    const data = axios.get("http://localhost:8081/API/v1.0/Seguridad/autorizaciones/jwt").then(r => r.data);
    console.log(data)
    return data
};
export const generarTokenFachada = async () => {
    return await generarToken();
};