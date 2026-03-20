const QUIZ_KEY = {
  COMUNICATION: 'comunication',
  INTELLIGENCE_EMOCIONAL: 'intelligence-emocional',
  HISTORY: 'history',
  THINKING_CRITICAL: 'thinking-critical',
  LOGIC_REASONING: 'logical-reasoning',
}

const CARDS_QUIZ = [
  {
    id: 1,
    key: QUIZ_KEY.HISTORY,
    description: 'Pon a prueba tus conocimientos sobre eventos históricos importantes.',
    path: '/history',
    title: 'Historia',
  },
  {
    id: 2,
    key: QUIZ_KEY.COMUNICATION,
    description: 'Aprende sobre los principios de la comunicación efectiva.',
    path: '/comunication',
    title: 'Comunicación',
  },
  {
    id: 3,
    key: QUIZ_KEY.INTELLIGENCE_EMOCIONAL,
    description: 'Desarrolla tu inteligencia emocional con este quiz interactivo.',
    path: '/intelligence-emocional',
    title: 'Inteligencia Emocional',
  },
]

const DEFAULT_FROM = {
  name: '',
  email: '',
  password: '',
}

const QUIZ_QUESTION = [
  {
    id: 1,
    title: '¿En qué año comenzó la Segunda Guerra Mundial?',
    options: ['1914', '1939', '1945', '1929'],
    correctAnswer: '1939',
  },
  {
    id: 2,
    title: '¿Quién fue el primer presidente del Perú?',
    options: [
      'Ramón Castilla',
      'José de la Riva-Agüero',
      'Simón Bolívar',
      'Andrés Avelino Cáceres',
    ],
    correctAnswer: 'José de la Riva-Agüero',
  },
  {
    id: 3,
    title: '¿Qué civilización construyó Machu Picchu?',
    options: ['Azteca', 'Maya', 'Inca', 'Olmeca'],
    correctAnswer: 'Inca',
  },
]

const QUIZ_COMUNICACIONES = [
  {
    id: 1,
    title: '¿Qué es la comunicación efectiva?',
    options: [
      'Hablar rápido',
      'Transmitir un mensaje de manera clara y comprensible',
      'Usar palabras complicadas',
      'Ignorar al receptor',
    ],
    correctAnswer: 'Transmitir un mensaje de manera clara y comprensible',
  },
  {
    id: 2,
    title: '¿Cuál es un elemento clave en la comunicación no verbal?',
    options: ['El tono de voz', 'La gramática', 'El vocabulario', 'La puntuación'],
    correctAnswer: 'El tono de voz',
  },
  {
    id: 3,
    title: '¿Qué significa "feedback" en comunicación?',
    options: [
      'Retroalimentación o respuesta',
      'Un tipo de ruido',
      'Un canal de transmisión',
      'Un código secreto',
    ],
    correctAnswer: 'Retroalimentación o respuesta',
  },
]

const QUIZ_PENSAMIENTO_CRITICO = [
  {
    id: 1,
    title: '¿Qué es el pensamiento crítico?',
    options: [
      'Aceptar información sin cuestionarla',
      'Analizar y evaluar la información antes de aceptarla',
      'Criticar a las personas',
      'Memorizar datos sin comprenderlos',
    ],
    correctAnswer: 'Analizar y evaluar la información antes de aceptarla',
  },
  {
    id: 2,
    title: '¿Cuál es un ejemplo de pensamiento crítico?',
    options: [
      'Creer todo lo que aparece en redes sociales',
      'Comparar varias fuentes de información',
      'Seguir la opinión de la mayoría',
      'Repetir una noticia sin verificarla',
    ],
    correctAnswer: 'Comparar varias fuentes de información',
  },
  {
    id: 3,
    title: '¿Qué habilidad fortalece el pensamiento crítico?',
    options: ['Memorización', 'Análisis', 'Imitación', 'Automatización'],
    correctAnswer: 'Análisis',
  },
]

const QUIZ_INTELIGENCIA_EMOCIONAL = [
  {
    id: 1,
    title: '¿Qué es la inteligencia emocional?',
    options: [
      'Ignorar las emociones',
      'Reconocer y gestionar las propias emociones',
      'Reprimir sentimientos',
      'Evitar conflictos siempre',
    ],
    correctAnswer: 'Reconocer y gestionar las propias emociones',
  },
  {
    id: 2,
    title: '¿Cuál es un ejemplo de empatía?',
    options: [
      'Imponer tu opinión',
      'Comprender cómo se siente otra persona',
      'Ignorar los sentimientos ajenos',
      'Cambiar de tema',
    ],
    correctAnswer: 'Comprender cómo se siente otra persona',
  },
  {
    id: 3,
    title: '¿Qué ayuda a manejar el estrés?',
    options: [
      'Reaccionar impulsivamente',
      'Respirar y reflexionar antes de actuar',
      'Evitar responsabilidades',
      'Culpar a otros',
    ],
    correctAnswer: 'Respirar y reflexionar antes de actuar',
  },
]

const QUIZ_LOGICA_Y_RAZONAMIENTO = [
  {
    id: 1,
    title:
      'Si todos los gatos son animales y algunos animales son negros, ¿qué se puede concluir?',
    options: [
      'Todos los gatos son negros',
      'Algunos gatos podrían ser negros',
      'Ningún gato es negro',
      'Todos los animales son gatos',
    ],
    correctAnswer: 'Algunos gatos podrían ser negros',
  },
  {
    id: 2,
    title: '¿Qué número sigue en la secuencia: 2, 4, 8, 16, ?',
    options: ['18', '20', '24', '32'],
    correctAnswer: '32',
  },
  {
    id: 3,
    title: '¿Qué se prioriza en el razonamiento lógico?',
    options: ['Opiniones', 'Emociones', 'Conclusiones basadas en reglas', 'Suposiciones'],
    correctAnswer: 'Conclusiones basadas en reglas',
  },
]

const TOTAL_QUIZ = [
  QUIZ_QUESTION,
  QUIZ_COMUNICACIONES,
  QUIZ_INTELIGENCIA_EMOCIONAL,
  QUIZ_PENSAMIENTO_CRITICO,
  QUIZ_LOGICA_Y_RAZONAMIENTO,
]
const TOTAL_QUESTION = 3
export {
  CARDS_QUIZ,
  DEFAULT_FROM,
  QUIZ_KEY,
  QUIZ_QUESTION,
  QUIZ_COMUNICACIONES,
  QUIZ_PENSAMIENTO_CRITICO,
  QUIZ_INTELIGENCIA_EMOCIONAL,
  QUIZ_LOGICA_Y_RAZONAMIENTO,
  TOTAL_QUESTION,
  TOTAL_QUIZ,
}
