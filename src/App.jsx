import './styles/index.css'
import Info from './components/ginfo'
import Education from './components/education'
import Experience from './components/pexperience'


function App() {
  return (
    <div className='container'>
      <div className='inpt'>
        <Info  />
        <Education />
        <Experience />
      </div>
      <div className='display'></div>
    </div>
  )
}

export default App