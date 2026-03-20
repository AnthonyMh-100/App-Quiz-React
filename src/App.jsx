import { Component, useMemo, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { FormTabs } from './quiz-ui/FormTabs'
import { FormPageOne } from './quiz-ui/Form/FormPageOne'
import { FormPageTwo } from './quiz-ui/Form/FormPageTwo'
import { FormPageThree } from './quiz-ui/Form/FormPageThree'
import { useQuizFormData } from './quiz/hooks/useQuizFormData'
import { DEFAULT_FROM } from './quiz/utils/constants'
import { useNavigate } from 'react-router'

const data = [
  {
    key: 'p1',
    component: <FormPageOne />,
  },
  {
    key: 'p2',
    component: <FormPageTwo />,
  },
  {
    key: 'p3',
    component: <FormPageThree />,
  },
]

function App() {
  const [page, setPage] = useState(0)
  const { form, setForm } = useQuizFormData()
  const isDisabledButton = useMemo(
    () => Object.values(form).every(field => Boolean(field)),
    [form]
  )

  const navigate = useNavigate()

  const handleBack = () => {
    setForm(DEFAULT_FROM)
    setPage(0)
  }
  const handleSubmit = e => {
    e.preventDefault()
    navigate('/home')
    console.log(form)
  }

  return (
    <Container>
      <FormTabs
        data={data}
        defaultPage={page}
        setPage={setPage}
        isDisabledButton={isDisabledButton}
        onBack={handleBack}
        onSubmit={handleSubmit}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App
