export class PlacesOfGame{
    data=[
        {
            nombreLugar: 'Facultad de Economía',
            rutaFoto: '/assets/imgs/facultades/economia.jpg'
        },
        {
            nombreLugar: 'Facultad de Ciencias Químicas',
            rutaFoto: '/assets/imgs/facultades/ciencias_quimicas.jpg'
        },
        {
            nombreLugar: 'Facultad de Filosofía',
            rutaFoto: '/assets/imgs/facultades/filosofia.jpg'
        },
        {
            nombreLugar: 'Facultad de Ingeniería',
            rutaFoto: '/assets/imgs/facultades/ingenieria.jpg'
        },
        {
            nombreLugar: 'Facultad de Jurisprudencia',
            rutaFoto: '/assets/imgs/facultades/jurisprudencia.jpg'
        },
        {
            nombreLugar: 'Facultad de Psicología',
            rutaFoto: '/assets/imgs/facultades/psicologia.jpg'
        },
        {
            nombreLugar: 'Biblioteca',
            rutaFoto: '/assets/imgs/facultades/biblioteca.jpg'
        },
        {
            nombreLugar: 'Departamento de cultura física',
            rutaFoto: '/assets/imgs/facultades/fisica.png'
    }
    ]
    
    getPlacesOfGame(numPlace){
        return this.data[numPlace-1];
    }
}