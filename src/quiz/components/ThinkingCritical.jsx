import styled from 'styled-components'
import { MultiPageQuiz } from '../../quiz-ui/MultiPageQuiz'
import { QUIZ_PENSAMIENTO_CRITICO, QUIZ_KEY } from '../utils/constants'
import {
  calculateQuizResult,
  hasAnsweredPage,
  saveQuizDataToLocalStorage,
} from '../utils/utils'
import { useState, useMemo } from 'react'
import { useQuizMultiPageData } from '../hooks/useQuizMultiPageData'
import { useNavigate } from 'react-router'
import { FinishQuizModal } from './FinishQuizModal'
const { THINKING_CRITICAL } = QUIZ_KEY

export const ThinkingCritical = () => {
  const [page, setPage] = useState(0)
  const { quizData, setQuizData } = useQuizMultiPageData()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navigate = useNavigate()

  const handleSelectOption = option => {
    setQuizData(prev => ({
      ...prev,
      [QUIZ_PENSAMIENTO_CRITICO[page].id]: {
        id: QUIZ_PENSAMIENTO_CRITICO[page].id,
        page,
        option,
      },
    }))
  }

  const hasAnsweredCurrentPage = useMemo(
    () => hasAnsweredPage({ quizData, page }),
    [quizData, page]
  )

  const quizDataFinish = useMemo(
    () =>
      calculateQuizResult({
        quizData,
        quizSource: QUIZ_PENSAMIENTO_CRITICO,
      }),
    [quizData]
  )

  const handleFinish = () => {
    setIsModalOpen(true)
    saveQuizDataToLocalStorage({
      data: quizDataFinish,
      key: THINKING_CRITICAL,
      quizKey: 'quizData',
    })
  }

  return (
    <Container>
      <MultiPageQuiz
        answerData={quizData}
        data={QUIZ_PENSAMIENTO_CRITICO}
        pageIndex={page}
        setPage={() => setPage(page + 1)}
        setPrev={() => setPage(page - 1)}
        hasAnsweredCurrentPage={hasAnsweredCurrentPage}
        onSelectOption={handleSelectOption}
        titleName="Pensamiento Crítico"
        onFinish={handleFinish}
      />
      {isModalOpen && (
        <FinishQuizModal
          isOpen={isModalOpen}
          score={quizDataFinish.total}
          onClose={() => {
            setIsModalOpen(false)
            navigate('/')
          }}
        />
      )}
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: transparent;
`
