import Client from './Clients/AxiosClient';

const resource = '/alumnos';


export default {
    get() {
        return Client.get(`${resource}`);
    },
    create(alumno){
        return Client.post(`${resource}`, alumno);
    },
    update(payload, id) {
        return Client.put(`${resource}/${id}`, payload);
    },
    delete(id) {
        return Client.delete(`${resource}/${id}`)
    },
};