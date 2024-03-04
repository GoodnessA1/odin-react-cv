import '../styles/style.css'
import { useState } from 'react'

function Experience() {
    const [experience, setExperience] = useState({practicalExperience: ""});

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const newExperience = {...experience, [name]: value}
        setExperience(newExperience)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(experience.practicalExperience)
    }
    return (
        <div className='experience'>
            <h1>PRACTICAL EXPERIENCE</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    PRACTICAL EXPERIENCE:<br />
                    <textarea className='text' onChange={handleInputChange} name='practicalExperience' value={experience.practicalExperience}></textarea><br />
                </label>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Experience