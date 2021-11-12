import './InputField.css'

const InputField = ({label, onChange}) => (
  <label className='inputField'> {label} <br/>
    <input type="text" onChange={onChange} />
  </label>

)

export default InputField