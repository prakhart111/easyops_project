import React from 'react'
import './Form.css'

const FormComponent = ({masterData,setMasterData}) => {
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target?.name.value)
        console.log(e.target?.contact.value)

        let formData = {
            serial: masterData.at(-1).serial + 1,
            name:e.target?.name.value,
            contact:e.target?.name.value,
        }

        setMasterData(
            [...masterData,
                formData
            ]
        )
    }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <label>Name:</label>
            <input type="text" id="name" name="name" />
            <label>Contact:</label>
            <input type="text" id="contact" name="contact" />
            <input type="submit" value="Save" className='btn' />
        </form>
    </div>
  )
}

export default FormComponent