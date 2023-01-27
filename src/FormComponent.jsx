import React from 'react'
import './Form.css'

const FormComponent = ({masterData,setMasterData}) => {

    const [name,setName] = React.useState("default name");
    const [contact,setContact] = React.useState("default contact");

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target?.name.value)
        console.log(e.target?.contact.value)

        let formData = {
            serial: masterData.at(-1) ? masterData.at(-1).serial + 1 : 1,
            name:name,
            contact:contact,
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
            <input placeholder="default name" onChange={(e)=>setName(e.target.value)} type="text" id="name" name="name" />
            <label>Contact:</label>
            <input placeholder="default contact" onChange={(e)=>setContact(e.target.value)} type="text" id="contact" name="contact" />
            <input type="submit" value="Save" className='btn' />
        </form>
    </div>
  )
}

export default FormComponent