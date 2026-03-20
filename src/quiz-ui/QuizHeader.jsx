import { useMemo } from 'react'
import styled from 'styled-components'
import { TOTAL_QUIZ, TOTAL_QUESTION } from '../quiz/utils/constants'

export const QuizHeader = ({ currentQuiz }) => {
  const totalQuestions = TOTAL_QUIZ.length * TOTAL_QUESTION

  const score = Object.values(currentQuiz).reduce((acc, { correct }) => acc + correct, 0)

  const progress = (score / totalQuestions) * 100 || 0
  const progressLabel = useMemo(() => `${Math.round(progress)}%`, [progress])

  return (
    <Header>
      <HeaderInner>
        <Left>
          <Title>Puntaje</Title>
          <SubTitle>Progreso global</SubTitle>
        </Left>

        <Right>
          <ScoreRow>
            <ScoreText>
              {score} / {totalQuestions}
            </ScoreText>
            <Percent aria-label="Porcentaje de progreso">{progressLabel}</Percent>
          </ScoreRow>

          <ProgressBar aria-label="Barra de progreso">
            <ProgressFill style={{ width: `${progress}%` }} />
          </ProgressBar>
        </Right>
      </HeaderInner>
    </Header>
  )
}

const Header = styled.header`
  width: 100%;
  padding: 20px 24px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`

const HeaderInner = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #ffffff, #f8fafc);
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);

  @media (max-width: 640px) {
    gap: 12px;
    align-items: flex-start;
    flex-direction: column;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #0f172a;
`

const SubTitle = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  @media (max-width: 640px) {
    align-items: stretch;
    width: 100%;
  }
`

const ScoreRow = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: 10px;
`

const ScoreText = styled.span`
  font-size: 14px;
  color: #475569;
`

const Percent = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #4f46e5;
`

const ProgressBar = styled.div`
  width: 180px;
  height: 8px;
  background: #e5e7eb;
  border-radius: 999px;
  overflow: hidden;

  @media (max-width: 640px) {
    width: 100%;
  }
`

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #7c3aed, #6366f1);
  transition: width 0.4s ease;
`
