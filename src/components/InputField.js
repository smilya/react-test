import './InputField.css'

const InputField = ({label, onChange, value}) => {
  return (
  <label className='inputField'> {label} <br/>
    <input type="text" onChange={onChange} value={value} />
  </label>

)}

export default InputField