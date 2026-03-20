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
          const letter = String.fromCharCode(65 + index)
          const selected = option === selectedOption

          return (
            <Option
              key={index}
              type="button"
              onClick={() => onClick(option)}
              $selected={selected}
              aria-pressed={selected}
              data-letter={letter}
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
  max-width: 600px;
  background: #ffffff;
  border-radius: 22px;
  padding: 34px 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid rgba(99, 102, 241, 0.14);
  box-shadow:
    0 22px 50px rgba(15, 23, 42, 0.10),
    inset 0 1px 0 rgba(255, 255, 255, 0.65);

  @media (max-width: 480px) {
    padding: 24px 18px 20px;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
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
  font-size: 22px;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  letter-spacing: -0.01em;
`

const Question = styled.p`
  font-size: 16.5px;
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
  position: relative;
  padding: 14px 16px 14px 54px;
  border-radius: 14px;
  border: 1px solid ${({ $selected }) => ($selected ? 'rgba(99, 102, 241, 0.35)' : '#e5e7eb')};
  background: ${({ $selected }) =>
    $selected ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.10), rgba(59, 130, 246, 0.08))' : '#f9fafb'};
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

  box-shadow: ${({ $selected }) =>
    $selected ? '0 14px 26px rgba(99, 102, 241, 0.14)' : '0 8px 16px rgba(15, 23, 42, 0.05)'};

  &::before {
    content: attr(data-letter);
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 28px;
    height: 28px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    font-size: 12px;
    font-weight: 800;
    color: ${({ $selected }) => ($selected ? '#ffffff' : '#4f46e5')};
    background: ${({ $selected }) =>
      $selected ? 'linear-gradient(135deg, #6366f1, #818cf8)' : 'rgba(99, 102, 241, 0.10)'};
    border: 1px solid rgba(99, 102, 241, 0.22);
    box-shadow:
      0 10px 20px rgba(99, 102, 241, 0.18),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }

  &::after {
    content: ${({ $selected }) => ($selected ? "'✓'" : "''")};
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 22px;
    height: 22px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    font-size: 12px;
    font-weight: 900;
    color: #ffffff;
    background: linear-gradient(135deg, #4f46e5, #6366f1);
    box-shadow: 0 10px 18px rgba(99, 102, 241, 0.22);
  }

  &:hover {
    transform: translateY(-1px);
    background: ${({ $selected }) =>
      $selected ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(59, 130, 246, 0.10))' : '#ffffff'};
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
