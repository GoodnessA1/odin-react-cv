import '../styles/style.css'
import { useState } from 'react'

function Info({ onFormSubmit }) {
    const [generalInfo, setGeneralInfo] = useState({
        name: "",
        contactInfo: "",
        emailAddress: "",
        houseAddress: ""
    });

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const newGeneralInfo = {...generalInfo, [name]: value}
        setGeneralInfo(newGeneralInfo)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onFormSubmit(generalInfo)
        setGeneralInfo({
            name: "",
            contactInfo: "",
            emailAddress: "",
            houseAddress: ""
        })
    }
    return (
        <div>
            <h1>GENERAL INFORMATION</h1>
            <div  className='experience'>
                <form onSubmit={handleSubmit} id='form'>
                    <label>
                        NAME:<br />
                        <input onChange={handleInputChange} name='name' value={generalInfo.name} required/>
                    </label><br />
                    <label>
                        PHONE NUMBER:<br />
                        <input onChange={handleInputChange} name='contactInfo' value={generalInfo.contactInfo} required/>
                    </label><br />
                    <label>
                        EMAIL ADDRESS:<br />
                        <input onChange={handleInputChange} name='emailAddress' value={generalInfo.emailAddress} required/>
                    </label><br />
                    <label>
                        HOUSE ADDRESS:<br />
                        <input onChange={handleInputChange} name='houseAddress' value={generalInfo.houseAddress} required/>
                    </label><br />
                    <input type='submit'/>
                </form>
            </div>
        </div>
    )
}

export default Info