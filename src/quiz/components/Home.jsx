import { NavLink } from 'react-router'
import styled from 'styled-components'
import { QuizHeader } from '../../quiz-ui/QuizHeader'
import { CardQuiz } from './CardQuiz'
import { useMemo } from 'react'

export const Home = () => {
  const CARDS_QUIZ = CardQuiz()
  const currentQuiz = useMemo(() => {
    const data = localStorage.getItem('quizData')
    return data ? JSON.parse(data) : {}
  }, [])

  return (
    <>
      <QuizHeader currentQuiz={currentQuiz} />
      <Main>
        <Intro>
          <Title>Elige tu Quiz</Title>
          <Subtitle>Practica a tu ritmo y revisa tu progreso en cada categoría.</Subtitle>
        </Intro>
        <Grid>
          {CARDS_QUIZ.map(({ id, key, title, description, path, icon }) => (
            <Card to={path} key={id} aria-label={`Abrir quiz de ${title}`}>
              <Icon>{icon}</Icon>
              <ContentWrapper>
                <CardContent>
                  <Label>{title}</Label>
                  <Description>{description}</Description>
                </CardContent>

                <Stats aria-label="Estado del quiz">
                  {currentQuiz[key] ? (
                    <>
                      <StatCorrect>✔ {currentQuiz[key].correct} correctas</StatCorrect>
                      <StatWrong>✖ {currentQuiz[key].wrong} incorrectas</StatWrong>
                    </>
                  ) : (
                    <StatNew>Nuevo</StatNew>
                  )}
                </Stats>
              </ContentWrapper>

              <Arrow>Comenzar →</Arrow>
            </Card>
          ))}
        </Grid>
      </Main>
    </>
  )
}
const Main = styled.main`
  min-height: 70vh;
  width: 100%;
  padding: 40px 24px 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:
    radial-gradient(circle at top, #eef2ff 0%, #f8fafc 40%),
    linear-gradient(to bottom, #f8fafc, #ffffff);
`

const Intro = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-bottom: 28px;
`

const Title = styled.h1`
  font-size: clamp(1.75rem, 2.2vw, 2.25rem);
  font-weight: 750;
  color: #0f172a;
  margin: 0;
  letter-spacing: -0.02em;
`

const Subtitle = styled.p`
  margin: 10px 0 0;
  max-width: 62ch;
  color: #475569;
  line-height: 1.5;
  font-size: 0.98rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
  width: 100%;
  max-width: 1100px;
`

const Card = styled(NavLink)`
  position: relative;
  padding: 22px 22px 18px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 14px;
  min-height: 168px;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border: 1px solid rgba(99, 102, 241, 0.22);

  text-decoration: none;
  cursor: pointer;
  overflow: hidden;

  box-shadow:
    0 12px 28px rgba(15, 23, 42, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.65);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: radial-gradient(circle at 20% 10%, rgba(99, 102, 241, 0.16), transparent 55%);
    opacity: 0;
    transition: opacity 0.2s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(99, 102, 241, 0.35);
    box-shadow:
      0 18px 44px rgba(99, 102, 241, 0.18),
      inset 0 1px 0 rgba(255, 255, 255, 0.65);
  }

  &:hover::before {
    opacity: 1;
  }

  &:focus-visible {
    outline: 3px solid rgba(99, 102, 241, 0.45);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::before {
      transition: none;
    }

    &:hover {
      transform: none;
    }
  }
`

const Icon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  width: 44px;
  height: 44px;
  border-radius: 12px;

  background: linear-gradient(135deg, #6366f1, #818cf8);
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.35);

  transition: transform 0.2s ease;

  ${Card}:hover & {
    transform: translateY(-1px);
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-right: 56px;
  flex: 1;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const Label = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: #0f172a;
  text-align: left;
  margin: 0;
  letter-spacing: -0.01em;
`

const Description = styled.p`
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.45;
  text-align: left;
  margin: 0;
`

const Stats = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

const StatBase = styled.span`
  font-size: 12px;
  font-weight: 500;
  padding: 6px 10px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  line-height: 1;
`

const StatCorrect = styled(StatBase)`
  background: #ecfdf5;
  color: #047857;
  border: 1px solid #a7f3d0;
`

const StatWrong = styled(StatBase)`
  background: #fef2f2;
  color: #b91c1c;
  border: 1px solid #fecaca;
`

const StatNew = styled(StatBase)`
  background: rgba(99, 102, 241, 0.08);
  color: #3730a3;
  border: 1px solid rgba(99, 102, 241, 0.25);
`

const Arrow = styled.span`
  margin-top: auto;
  align-self: flex-end;

  font-size: 14px;
  font-weight: 600;
  color: #6366f1;

  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 8px 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(99, 102, 241, 0.18);

  opacity: 0.92;
  transform: translateY(2px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
    background: rgba(255, 255, 255, 0.8);
    border-color: rgba(99, 102, 241, 0.28);
  }
`
