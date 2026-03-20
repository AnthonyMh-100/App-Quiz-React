export const calculateQuizResult = ({ quizData, quizSource }) => {
  return quizSource.reduce(
    (acc, { id: quizId, correctAnswer }) => {
      const quizAnswer = quizData[quizId]?.option

      if (!quizAnswer) return acc

      if (quizAnswer === correctAnswer) acc.correct += 1
      else acc.wrong += 1

      const totalAnswered = acc.correct + acc.wrong
      acc.total = Math.ceil((acc.correct / totalAnswered) * 100)

      return acc
    },
    {
      correct: 0,
      wrong: 0,
      total: 0,
    }
  )
}

export const hasAnsweredPage = ({ quizData, page }) => {
  return Object.values(quizData).some(({ page: pageQuiz }) => pageQuiz === page)
}
export const saveQuizDataToLocalStorage = ({ data, key, quizKey }) => {
  const storedData = localStorage.getItem(quizKey)

  const parsedData = storedData ? JSON.parse(storedData) : {}

  const newData = {
    ...parsedData,
    [key]: data,
  }

  localStorage.setItem(quizKey, JSON.stringify(newData))
}

export default { calculateQuizResult, hasAnsweredPage, saveQuizDataToLocalStorage }
