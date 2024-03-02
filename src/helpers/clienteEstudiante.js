import axios from "axios"
const consultarEstudiantes = async () => {
    const data = axios.get("http://localhost:8080/API/v1.0/Matricula/estudiantes").then(r => r.data);
    console.log(data)
    return data
};
export const consultarEstudiantesFachada = async () => {
    return await consultarEstudiantes();
};

const insertar = async (body) => {
    const data = axios.post("http://localhost:8080/API/v1.0/Matricula/estudiantes", body).then(r => r.data);
};
export const insertarFachada = async (body) => {
    return await insertar(body);
}