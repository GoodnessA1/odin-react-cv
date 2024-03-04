import './styles/index.css'
import Info from './components/ginfo'
import Education from './components/education'
import Experience from './components/pexperience'
import { useState } from 'react'


function App() {
  const [submittedInfoValue, setSubmittedInfoValue] = useState(null)
  const handleInfoFormSubmit = (value) => {
    setSubmittedInfoValue(value);
    alert(submittedInfoValue)
  };
  const [submittedEducationValue, setSubmittedEducationValue] = useState(null)
  const handleEducationFormSubmit = (value) => {
    setSubmittedEducationValue(value);
    alert(submittedEducationValue)
  };
  const [submittedExperienceValue, setSubmittedExperienceValue] = useState(null)
  const handleExperienceFormSubmit = (value) => {
    setSubmittedExperienceValue(value);
    alert(submittedExperienceValue)
  };

  return (
    <div className='container'>
      <div className='inpt'>
        <Info  onFormSubmit={handleInfoFormSubmit}/>
        <Education onFormSubmit={handleEducationFormSubmit}/>
        <Experience onFormSubmit={handleExperienceFormSubmit}/>
      </div>
      <div className='display'>
      <h2>GENERAL INFORMATION</h2>
        <h3>Name: {submittedInfoValue.name}</h3>
        <p>Contact: {submittedInfoValue.contactInfo}</p>
        <p>Email Address: {submittedInfoValue.emailAddress}</p>
        <p>House Address: {submittedInfoValue.houseAddress}</p>
        <hr />
        <h2>EDUCATION</h2>
        <p>Education Level: {submittedEducationValue.educationLevel}</p>
        <p>Tertiary Education: {submittedEducationValue.tertiaryEducation}</p>
        <p>Course: {submittedEducationValue.course}</p>
        <p>Date Attended: {submittedEducationValue.dateAttended}</p>
        <hr />
        <h2>PRACTICAL EXPERIENCE</h2>
        <p>{submittedExperienceValue.practicalExperience}</p>
      </div>
    </div>
  )
}

export default App