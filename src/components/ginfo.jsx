import '../styles/style.css'
import { useState } from 'react'

function Info() {
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
        alert(`${generalInfo.name} + ${generalInfo.contactInfo} + ${generalInfo.emailAddress} + ${generalInfo.houseAddress}`)
    }
    return (
        <div className='experience'>
            <h1>GENERAL INFORMATION</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    NAME:<br />
                    <input onChange={handleInputChange} name='name' value={generalInfo.name} />
                </label><br />
                <label>
                    PHONE NUMBER:<br />
                    <input onChange={handleInputChange} name='contactInfo' value={generalInfo.contactInfo} />
                </label><br />
                <label>
                    EMAIL ADDRESS:<br />
                    <input onChange={handleInputChange} name='emailAddress' value={generalInfo.emailAddress} />
                </label><br />
                <label>
                    HOUSE ADDRESS:<br />
                    <input onChange={handleInputChange} name='houseAddress' value={generalInfo.houseAddress} />
                </label><br />
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Info