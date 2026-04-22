import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <>
      <Home />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2600,
          style: {
            borderRadius: '18px',
            background: '#ffffff',
            color: '#21201d',
            border: '1px solid rgba(25, 25, 25, 0.08)',
            boxShadow: '0 18px 40px rgba(40, 41, 46, 0.12)',
          },
        }}
      />
    </>
  )
}

export default App
