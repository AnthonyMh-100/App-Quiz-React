import React from 'react'
import { styled } from 'styled-components'
import { useQuizFormData } from '../../quiz/hooks/useQuizFormData'

export const FormPageOne = () => {
  const { setForm } = useQuizFormData()

  return (
    <ContainerPage>
      <Field>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Ingresa tu nombre"
          onChange={({ target: { name, value } }) =>
            setForm(prev => ({ ...prev, [name]: value }))
          }
        />
      </Field>
    </ContainerPage>
  )
}

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: #9ca3af;
`

const Input = styled.input`
  padding: 14px 16px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  background-color: #ffffff;
  color: #1f2937;
  font-size: 14px;
  transition: all 0.2s ease;

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.35);
    background-color: #ffffff;
  }
`
