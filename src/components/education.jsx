import '../styles/style.css'
import { useState } from 'react';

function Education({ onFormSubmit }) {
    const [education, setEducation] = useState({
        tertiaryEducation: "",
        dateAttended: "",
        course: "",
        educationLevel: ""
    });

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const newEducation = {...education, [name]: value}
        setEducation(newEducation)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onFormSubmit(education)
        setEducation({
            tertiaryEducation: "",
            dateAttended: "",
            course: "",
            educationLevel: ""
        })
    }
    return (
        <div className='experience'>
            <h1>EDUCATION</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    EDUCATION LEVEL:<br />
                    <input onChange={handleInputChange} name='educationLevel' value={education.educationLevel} />
                </label><br />
                <label>
                    TERTIARY INSTITUTION:<br />
                    <input onChange={handleInputChange} name='tertiaryEducation' value={education.tertiaryEducation} />
                </label><br />
                <label>
                    DATE ATTENDED:<br />
                    <input onChange={handleInputChange} name='dateAttended' value={education.dateAttended} />
                </label><br />
                <label>
                    COURSE:<br />
                    <input onChange={handleInputChange} name='course' value={education.course} />
                </label><br />
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Education;