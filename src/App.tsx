import './App.css'
import RegisterPage from './pages/Register/RegisterPage'

function App() {
  return (
    <>
      <div className='bg-red-400 min-h-screen bg-[url(/images/bg-intro-mobile.png)] md:bg-[url(/images/bg-intro-desktop.png)]'>
        <RegisterPage />
      </div>
    </>
  )
}

export default App
