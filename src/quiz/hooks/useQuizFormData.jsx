import { useContext } from 'react'
import { quizformContext } from '../context/QuizFormDataState'

export const useQuizFormData = () => useContext(quizformContext)
