import React from 'react'
import './Form.css'

const FormComponent = ({setFormData}) => {
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target?.name.value)
        console.log(e.target?.contact.value)
    }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label for="contact">Contact:</label>
            <input type="text" id="contact" name="contact" />
            <input type="submit" value="Save" className='btn' />
        </form>
    </div>
  )
}

export default FormComponent