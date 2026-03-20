import { useContext } from 'react'
import { QuizMultiPageDataContext } from '../context/QuizMultiPageDataState'

export const useQuizMultiPageData = () => useContext(QuizMultiPageDataContext)
