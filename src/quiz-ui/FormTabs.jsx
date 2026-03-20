import React, { useMemo } from 'react'
import { styled } from 'styled-components'

export const FormTabs = ({
  data,
  defaultPage,
  setPage,
  isDisabledButton,
  onBack,
  onSubmit,
}) => {
  const isLastPage = useMemo(
    () => defaultPage === data.length - 1,
    [defaultPage, data.length]
  )
  return (
    <Container>
      <Header>
        <Title>Información personal</Title>
        <Description>
          Completa los siguientes datos para continuar con el formulario
        </Description>
      </Header>

      <ContainerForm onSubmit={onSubmit}>
        {data[defaultPage].component}

        <ButtonGroup>
          {!isLastPage && (
            <Button
              type="button"
              $variant="primary"
              onClick={() => setPage(prev => prev + 1)}
            >
              Siguiente
            </Button>
          )}

          {isLastPage && (
            <>
              <Button $variant="primary" disabled={!isDisabledButton && isLastPage}>
                Ingresar
              </Button>
              <Button type="button" onClick={onBack}>
                Volver
              </Button>
            </>
          )}
        </ButtonGroup>
      </ContainerForm>
    </Container>
  )
}

const Container = styled.div`
  min-height: 90vh;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #f8fafc;
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
`

const Description = styled.p`
  font-size: 14px;
  color: #4b5563;
  margin: 0;
`
const ContainerForm = styled.form`
  width: 70%;
  padding: 36px;
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 28px;
`
const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background-color: ${({ disabled, $variant }) => {
    if ($variant === 'primary') return '#3182ce'
    if (disabled) return '#e5e7eb'
    return '#ffffff'
  }};
  color: ${({ disabled, $variant }) => {
    if ($variant === 'primary') return '#ffffff'
    if (disabled) return '#9ca3af'
    return '#1f2937'
  }};
  font-size: 14px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);

  &:hover:not(:disabled) {
    background-color: ${({ $variant }) =>
      $variant === 'primary' ? '#2563eb' : '#f3f4f6'};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`
