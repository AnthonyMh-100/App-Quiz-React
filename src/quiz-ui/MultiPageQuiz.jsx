import React, { useMemo } from 'react'
import { QuizForm } from './QuizForm'
import styled from 'styled-components'

export const MultiPageQuiz = ({
  answerData,
  data,
  pageIndex,
  setPage,
  setPrev,
  hasAnsweredCurrentPage,
  onSelectOption,
  titleName,
  onFinish,
}) => {
  const { id, title, options } = useMemo(() => data[pageIndex], [data, pageIndex])

  const { isFirstPage, isLastPage } = useMemo(() => {
    return {
      isLastPage: pageIndex === data.length - 1,
      isFirstPage: pageIndex === 0,
    }
  }, [data, pageIndex])

  return (
    <Container>
      <Content>
        <TopBar aria-label="Progreso del quiz">
          <ProgressPill>
            Pregunta <ProgressNumber>{pageIndex + 1}</ProgressNumber> de{' '}
            <ProgressNumber>{data.length}</ProgressNumber>
          </ProgressPill>
          <Hint>Selecciona una opción para continuar</Hint>
        </TopBar>

        <QuizForm
          key={id}
          selectedOption={answerData?.[id]?.option}
          title={titleName}
          question={title}
          options={options}
          onClick={onSelectOption}
        />

        <ContainerButton>
          {!isFirstPage && (
            <Button type="button" $variant="secondary" onClick={setPrev}>
              Anterior
            </Button>
          )}

          {isLastPage ? (
            <Button
              type="button"
              $variant="primary"
              onClick={onFinish}
              disabled={!hasAnsweredCurrentPage}
            >
              Terminar
            </Button>
          ) : (
            <Button
              type="button"
              $variant="primary"
              onClick={setPage}
              disabled={!hasAnsweredCurrentPage}
            >
              Siguiente
            </Button>
          )}
        </ContainerButton>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 28px 16px 44px;
  background:
    radial-gradient(circle at top, #eef2ff 0%, #f8fafc 42%),
    linear-gradient(to bottom, #f8fafc, #ffffff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    justify-content: flex-start;
    padding-top: 22px;
  }
`

const Content = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 14px;

  @media (min-width: 640px) {
    transform: translateY(-26px);
  }

  @media (max-width: 639px) {
    transform: none;
  }
`

const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const ProgressPill = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(99, 102, 241, 0.18);
  box-shadow:
    0 10px 22px rgba(15, 23, 42, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
  color: #0f172a;
  font-size: 13px;
`

const ProgressNumber = styled.span`
  font-weight: 700;
  color: #4f46e5;
`

const Hint = styled.span`
  font-size: 13px;
  color: #64748b;
`

const Button = styled.button`
  flex: 1;
  padding: 14px 18px;
  border-radius: 14px;
  border: 1px solid transparent;
  font-weight: 600;
  font-size: 14px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    background 0.18s ease,
    border-color 0.18s ease,
    color 0.18s ease;

  background: ${({ disabled, $variant }) => {
    if (disabled) return '#e5e7eb'
    if ($variant === 'primary') return 'linear-gradient(135deg, #6366f1, #818cf8)'
    return '#ffffff'
  }};

  color: ${({ disabled, $variant }) => {
    if (disabled) return '#9ca3af'
    if ($variant === 'primary') return '#ffffff'
    return '#374151'
  }};

  box-shadow: ${({ $variant }) =>
    $variant === 'primary'
      ? '0 14px 26px rgba(99,102,241,0.22)'
      : '0 10px 18px rgba(15,23,42,0.08)'};

  border-color: ${({ disabled, $variant }) => {
    if (disabled) return 'transparent'
    if ($variant === 'primary') return 'rgba(99, 102, 241, 0.35)'
    return 'rgba(148, 163, 184, 0.35)'
  }};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    background: ${({ $variant }) =>
      $variant === 'primary'
        ? 'linear-gradient(135deg, #4f46e5, #6366f1)'
        : 'rgba(255, 255, 255, 0.9)'};
    box-shadow: ${({ $variant }) =>
      $variant === 'primary'
        ? '0 18px 34px rgba(99,102,241,0.28)'
        : '0 14px 24px rgba(15,23,42,0.10)'};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid rgba(99, 102, 241, 0.45);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover:not(:disabled) {
      transform: none;
    }
  }
`
