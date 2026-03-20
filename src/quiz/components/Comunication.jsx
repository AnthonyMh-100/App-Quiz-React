import styled from 'styled-components'
import { MultiPageQuiz } from '../../quiz-ui/MultiPageQuiz'
import { QUIZ_COMUNICACIONES, QUIZ_KEY } from '../utils/constants'
import { useState, useMemo } from 'react'
import { useQuizMultiPageData } from '../hooks/useQuizMultiPageData'
import {
  calculateQuizResult,
  hasAnsweredPage,
  saveQuizDataToLocalStorage,
} from '../utils/utils'
import { FinishQuizModal } from './FinishQuizModal'
import { useNavigate } from 'react-router'
const { COMUNICATION } = QUIZ_KEY

export const Comunication = () => {
  const [page, setPage] = useState(0)
  const { quizData, setQuizData } = useQuizMultiPageData()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navigate = useNavigate()

  const handleSelectOption = option => {
    setQuizData(prev => ({
      ...prev,
      [QUIZ_COMUNICACIONES[page].id]: { id: QUIZ_COMUNICACIONES[page].id, page, option },
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
        quizSource: QUIZ_COMUNICACIONES,
      }),
    [quizData]
  )
  const handleFinish = () => {
    setIsModalOpen(true)

    saveQuizDataToLocalStorage({
      data: quizDataFinish,
      key: COMUNICATION,
      quizKey: 'quizData',
    })
  }

  return (
    <Container>
      <MultiPageQuiz
        answerData={quizData}
        data={QUIZ_COMUNICACIONES}
        pageIndex={page}
        setPage={() => setPage(page + 1)}
        setPrev={() => setPage(page - 1)}
        hasAnsweredCurrentPage={hasAnsweredCurrentPage}
        onSelectOption={handleSelectOption}
        titleName="Comunicaciones"
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
