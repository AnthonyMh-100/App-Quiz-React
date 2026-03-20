import React from 'react'
import { styled } from 'styled-components'
import { useQuizFormData } from '../../quiz/hooks/useQuizFormData'

export const FormPageTwo = () => {
  const { setForm } = useQuizFormData()

  return (
    <ContainerPage>
      <Input
        type="text"
        name="email"
        placeholder="Ingresa tu correo"
        onChange={({ target: { name, value } }) =>
          setForm(prev => ({ ...prev, [name]: value }))
        }
      />
    </ContainerPage>
  )
}

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: #9ca3af;
`

const Input = styled.input`
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background-color: #ffffff;
  color: #1f2937;
  font-size: 14px;

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.3);
    background-color: #ffffff;
  }
`
