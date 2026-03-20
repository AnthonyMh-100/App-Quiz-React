import styled from 'styled-components'
import { MultiPageQuiz } from '../../quiz-ui/MultiPageQuiz'
import { QUIZ_LOGICA_Y_RAZONAMIENTO, QUIZ_KEY } from '../utils/constants'
import {
  calculateQuizResult,
  hasAnsweredPage,
  saveQuizDataToLocalStorage,
} from '../utils/utils'
import { useState, useMemo } from 'react'
import { useQuizMultiPageData } from '../hooks/useQuizMultiPageData'
import { useNavigate } from 'react-router'
import { FinishQuizModal } from './FinishQuizModal'
const { LOGIC_REASONING } = QUIZ_KEY

export const LogicReasoning = () => {
  const [page, setPage] = useState(0)
  const { quizData, setQuizData } = useQuizMultiPageData()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navigate = useNavigate()

  const handleSelectOption = option => {
    setQuizData(prev => ({
      ...prev,
      [QUIZ_LOGICA_Y_RAZONAMIENTO[page].id]: {
        id: QUIZ_LOGICA_Y_RAZONAMIENTO[page].id,
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
        quizSource: QUIZ_LOGICA_Y_RAZONAMIENTO,
      }),
    [quizData]
  )

  const handleFinish = () => {
    setIsModalOpen(true)
    saveQuizDataToLocalStorage({
      data: quizDataFinish,
      key: LOGIC_REASONING,
      quizKey: 'quizData',
    })
  }

  return (
    <Container>
      <MultiPageQuiz
        answerData={quizData}
        data={QUIZ_LOGICA_Y_RAZONAMIENTO}
        pageIndex={page}
        setPage={() => setPage(page + 1)}
        setPrev={() => setPage(page - 1)}
        hasAnsweredCurrentPage={hasAnsweredCurrentPage}
        onSelectOption={handleSelectOption}
        titleName="Razonamiento Lógico"
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
