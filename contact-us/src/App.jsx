import './App.css'
import ContactHeader from './Components/Contact/ContactHeader.jsx'
import ContactForm from './Components/ContactForm/ContactForm.jsx'
import Navigation from './Components/Navigation/Navigation.jsx'

function App() {

  return (
    <>
      <Navigation />
      <main className='main_container'>
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  )
}

export default App
