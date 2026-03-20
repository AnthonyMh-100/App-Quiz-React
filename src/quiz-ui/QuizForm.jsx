import styled from 'styled-components'

export const QuizForm = ({ selectedOption, title, question, options, onClick }) => {
  return (
    <ContainerQuiz role="radiogroup" aria-label={`Pregunta de ${title}`}>
      <Header>
        <Title>{title}</Title>
        <Progress>Elige una opción</Progress>
      </Header>

      <Question>{question}</Question>

      <Options>
        {options?.map((option, index) => {
          const selected = option === selectedOption

          return (
            <Option
              key={index}
              type="button"
              onClick={() => onClick(option)}
              $selected={selected}
              aria-pressed={selected}
            >
              {option}
            </Option>
          )
        })}
      </Options>
    </ContainerQuiz>
  )
}

const ContainerQuiz = styled.div`
  width: 100%;
  max-width: 640px;
  background: #ffffff;
  border-radius: 18px;
  padding: clamp(18px, 3vw, 32px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid rgba(99, 102, 241, 0.12);
  box-shadow:
    0 22px 50px rgba(15, 23, 42, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.65);
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Progress = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #64748b;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.18);
`

const Title = styled.h1`
  font-size: clamp(18px, 2vw, 22px);
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  letter-spacing: -0.01em;
`

const Question = styled.p`
  font-size: clamp(14px, 1.5vw, 16px);
  color: #475569;
  text-align: left;
  margin: 4px 0 0;
  line-height: 1.45;
`

const Options = styled.div`
  display: grid;
  gap: 12px;
`

const Option = styled.button`
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid
    ${({ $selected }) => ($selected ? 'rgba(99, 102, 241, 0.38)' : '#e5e7eb')};
  background: ${({ $selected }) => ($selected ? 'rgba(99, 102, 241, 0.10)' : '#ffffff')};
  color: #0f172a;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition:
    transform 0.16s ease,
    box-shadow 0.16s ease,
    background 0.16s ease,
    border-color 0.16s ease;

  min-height: 48px;
  box-shadow: 0 8px 16px rgba(15, 23, 42, 0.06);
  word-break: break-word;

  &:hover {
    transform: translateY(-1px);
    background: ${({ $selected }) =>
      $selected ? 'rgba(99, 102, 241, 0.12)' : '#f8fafc'};
    border-color: rgba(99, 102, 241, 0.28);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid rgba(99, 102, 241, 0.45);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`
