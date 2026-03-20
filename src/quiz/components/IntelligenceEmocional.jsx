import styled from 'styled-components'
import { MultiPageQuiz } from '../../quiz-ui/MultiPageQuiz'
import { QUIZ_INTELIGENCIA_EMOCIONAL, QUIZ_KEY } from '../utils/constants'
import {
  calculateQuizResult,
  hasAnsweredPage,
  saveQuizDataToLocalStorage,
} from '../utils/utils'
import { useState, useMemo } from 'react'
import { useQuizMultiPageData } from '../hooks/useQuizMultiPageData'
import { useNavigate } from 'react-router'
import { FinishQuizModal } from './FinishQuizModal'

const { INTELLIGENCE_EMOCIONAL } = QUIZ_KEY

export const IntelligenceEmocional = () => {
  const [page, setPage] = useState(0)
  const { quizData, setQuizData } = useQuizMultiPageData()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navigate = useNavigate()

  const handleSelectOption = option => {
    setQuizData(prev => ({
      ...prev,
      [QUIZ_INTELIGENCIA_EMOCIONAL[page].id]: {
        id: QUIZ_INTELIGENCIA_EMOCIONAL[page].id,
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
        quizSource: QUIZ_INTELIGENCIA_EMOCIONAL,
      }),
    [quizData]
  )

  const handleFinish = () => {
    setIsModalOpen(true)
    saveQuizDataToLocalStorage({
      data: quizDataFinish,
      key: INTELLIGENCE_EMOCIONAL,
      quizKey: 'quizData',
    })
  }

  return (
    <Container>
      <MultiPageQuiz
        answerData={quizData}
        data={QUIZ_INTELIGENCIA_EMOCIONAL}
        pageIndex={page}
        setPage={() => setPage(page + 1)}
        setPrev={() => setPage(page - 1)}
        hasAnsweredCurrentPage={hasAnsweredCurrentPage}
        onSelectOption={handleSelectOption}
        titleName="Inteligencia Emocional"
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
