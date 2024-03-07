import './styles/index.css'
import Info from './components/ginfo'
import Education from './components/education'
import Experience from './components/pexperience'
import { useState } from 'react'


function App() {
  const [submittedInfoValue, setSubmittedInfoValue] = useState({
  name: "",
  contactInfo: "",
  emailAddress: "",
  houseAddress: ""})
  const handleInfoFormSubmit = (value) => {
    setSubmittedInfoValue(value);
  };
  const [submittedEducationValue, setSubmittedEducationValue] = useState({
    tertiaryEducation: "",
    dateAttended: "",
    course: "",
    educationLevel: ""
  })
  const handleEducationFormSubmit = (value) => {
    setSubmittedEducationValue(value);
  };
  const [submittedExperienceValue, setSubmittedExperienceValue] = useState({
    practicalExperience: ""
  })
  const handleExperienceFormSubmit = (value) => {
    setSubmittedExperienceValue(value);
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