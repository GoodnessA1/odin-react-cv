import './styles/index.css'
import { Experience } from './components/pexperience.jsx'
import Education from './components/education.jsx'
import { Info } from './components/ginfo.jsx'

function App() {
  return (
    <div className='container'>
      <div className='inpt'>
        <Info />
        <Education />
        <Experience />
      </div>
    </div>
  )
}

export default App