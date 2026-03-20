import {
  IconCommunication,
  IconEmotion,
  IconHistory,
  IconCriticalThinking,
  IconLogicalReasoning,
} from '../utils/icons'
import { QUIZ_KEY } from '../utils/constants'
const {
  COMUNICATION,
  INTELLIGENCE_EMOCIONAL,
  HISTORY,
  THINKING_CRITICAL,
  LOGIC_REASONING,
} = QUIZ_KEY

export const CardQuiz = () => {
  return [
    {
      id: 1,
      key: HISTORY,
      title: 'Historia',
      description: 'Pon a prueba tus conocimientos sobre eventos históricos.',
      path: '/history',
      icon: <IconHistory />,
      stats: {
        correct: 6,
        wrong: 3,
      },
    },
    {
      id: 2,
      key: COMUNICATION,
      title: 'Comunicación',
      description: 'Aprende sobre los principios de la comunicación efectiva.',
      path: '/comunication',
      icon: <IconCommunication />,
      stats: {
        correct: 4,
        wrong: 5,
      },
    },
    {
      id: 3,
      key: INTELLIGENCE_EMOCIONAL,
      title: 'Inteligencia Emocional',
      description: 'Desarrolla tu inteligencia emocional con este quiz interactivo.',
      path: '/intelligence-emocional',
      icon: <IconEmotion />,
      stats: {
        correct: 8,
        wrong: 1,
      },
    },
    {
      id: 4,
      key: THINKING_CRITICAL,
      title: 'Pensamiento Crítico',
      description: 'Evalúa tu capacidad de análisis y pensamiento crítico.',
      path: '/critical-thinking',
      icon: <IconCriticalThinking />,
      stats: {
        correct: 5,
        wrong: 4,
      },
    },
    {
      id: 5,
      key: LOGIC_REASONING,
      title: 'Razonamiento Lógico',
      description: 'Resuelve problemas usando lógica y patrones.',
      path: '/logical-reasoning',
      icon: <IconLogicalReasoning />,
      stats: {
        correct: 7,
        wrong: 2,
      },
    },
  ]
}
