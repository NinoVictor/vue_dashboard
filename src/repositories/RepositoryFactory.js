import AlumnoRepository from './AlumnoRepository';

const repositories = {
    'alumnos': AlumnoRepository,
}

export default {
    get: name => repositories[name]
};