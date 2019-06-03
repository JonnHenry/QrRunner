export class Questions {
    data=[
        {
            question: '¿Quién fue el fundador de Microsoft ?',
            options:[
                'Steve Jobs',
                'Bill Gates',
                'Mark Zuckerberg',
                'Satya Nadella'
            ],
            correctAnswer: 'Bill Gates'
        },
        {
            question: '¿A qué categoría pertenece el aguacate?',
            options:[
                'Verdura', 
                'Hortaliza', 
                'Fruta', 
                'Es diversa'
            ],
            correctAnswer: 'Fruta'
        },
        {
            question: 'El señor y la señora Pérez tienen 6 hijas. Si cada una de ellas tiene un hermano ¿Cuántas personas forman la familia Pérez?',
            options:[
                '9 Personas',
                '14 Personas',
                '7 Personas',
                '8 Personas' 
            ],
            correctAnswer: '9 Personas'
        },
        {
            question: '¿En qué provincia está ubicado el Parque Nacional Yasuní?',
            options:[
                'Azuay',
                'Morona Santiago', 
                'Orellana',
                'Napo'
            ],
            correctAnswer: 'Orellana'
        },
        {
            question: 'Película ganadora del oscar 2019',
            options:[
                'Bohemia and Raphsody',
                'Green Book',
                'Roma',
                'Black Panther'
            ],
            correctAnswer: 'Green Book'
        },
        {
            question: '¿Cuándo fue la fundación de la Universidad de Cuenca?',
            options:[
                '1877',
                '1868',
                '1878',
                '1867'
            ],
            correctAnswer: '1867'
        },
        {
            question: '¿En la serie de los Simpsons, con quién se dio su primer beso Lisa?',
            options:[
                'Con Martín', 
                'Con Milhouse',
                'Con Ralph',
                'Con Nelson'
            ],
            correctAnswer: 'Con Ralph'
        },
        {
            question: '¿Quién de estos artistas no es Ecuatoriano?',
            options:[
                'Riccardo Perotti',
                'Gabriela Villalba',
                'Donato Poveda',
                'Norka'
            ],
            correctAnswer: 'Donato Poveda' 
        }

    ]

    getAllQuestion(numberOfQuestion){ //Retorna todos los datos de la pregunta
        return this.data[numberOfQuestion-1];
    }

    getOptionsOfQuestions(numberOfQuestion){
        return this.data[numberOfQuestion-1].options;
    }

    getAnswerOfQuestions(numberOfQuestion){
        return this.data[numberOfQuestion-1].correctAnswer;
    }

    getAnQuestion(numberOfQuestion){ //Retorna solo la pregunta que se quiere saber
        return this.data[numberOfQuestion-1].question;
    }
}