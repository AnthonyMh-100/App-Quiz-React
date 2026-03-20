import styled from 'styled-components'

export const FinishQuizModal = ({ isOpen, onClose, score }) => {
  if (!isOpen) return null

  return (
    <Overlay>
      <Modal>
        <Title>🎉 ¡Felicitaciones!</Title>

        <Text>Has completado el quiz.</Text>

        <Score>
          Tu puntaje final es <strong>{score}%</strong>
        </Score>

        <Button onClick={onClose}>Cerrar</Button>
      </Modal>
    </Overlay>
  )
}

export default FinishQuizModal

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`

const Modal = styled.div`
  background: #ffffff;
  border-radius: 18px;
  padding: 28px 24px;
  width: 100%;
  max-width: 360px;
  text-align: center;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.2);
  animation: pop 0.25s ease-out;

  @keyframes pop {
    from {
      transform: scale(0.92);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
`

const Text = styled.p`
  font-size: 1rem;
  color: #475569;
  margin-bottom: 10px;
`

const Score = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #6366f1;
  margin-bottom: 24px;
`

const Button = styled.button`
  padding: 10px 22px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg, #6366f1, #818cf8);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(99, 102, 241, 0.35);
  }
`
