import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import {
  Comunication,
  Home,
  History,
  IntelligenceEmocional,
  ThinkingCritical,
  LogicReasoning,
} from './quiz/components'
import { QuizMultiPageDataState } from './quiz/context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/history"
          element={
            <QuizMultiPageDataState>
              <History />
            </QuizMultiPageDataState>
          }
        />
        <Route
          path="/comunication"
          element={
            <QuizMultiPageDataState>
              <Comunication />
            </QuizMultiPageDataState>
          }
        />
        <Route
          path="/intelligence-emocional"
          element={
            <QuizMultiPageDataState>
              <IntelligenceEmocional />
            </QuizMultiPageDataState>
          }
        />
        <Route
          path="/critical-thinking"
          element={
            <QuizMultiPageDataState>
              <ThinkingCritical />
            </QuizMultiPageDataState>
          }
        />
        <Route
          path="/logical-reasoning"
          element={
            <QuizMultiPageDataState>
              <LogicReasoning />
            </QuizMultiPageDataState>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
