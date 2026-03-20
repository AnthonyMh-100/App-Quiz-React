import { createContext, useState } from 'react'
import { DEFAULT_FROM } from '../utils/constants';

export const quizformContext = createContext()

export const QuizFormDataState = ({ children }) => {
    const [form, setForm] = useState(DEFAULT_FROM)
  return (
    <quizformContext.Provider value={{
        form,
        setForm
    }}>
        { children }
    </quizformContext.Provider>
  )
}
