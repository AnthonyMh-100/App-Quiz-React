import { createContext, useState } from 'react'

export const QuizMultiPageDataContext = createContext()

export const QuizMultiPageDataState = ({ children }) => {
  const [quizData, setQuizData] = useState({})

  return (
    <QuizMultiPageDataContext.Provider
      value={{
        quizData,
        setQuizData,
      }}
    >
      {children}
    </QuizMultiPageDataContext.Provider>
  )
}
