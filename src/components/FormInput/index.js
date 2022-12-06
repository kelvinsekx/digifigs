import './forminput.styles.css'

export const FormInput = ({
    placeholder = '',
    onChangeHandler = f=>f,
    name="",
    styles = {},
    type=''
})=>(
    <div className='field'>
        <input 
            className='forminput' 
            placeholder={placeholder} 
            id={name} 
            onChange={onChangeHandler} 
            name={name}
            style={{...styles.input}}
            type={type}
        />
        <label htmlFor={name} style={{...styles.label}}>{placeholder}</label>
    </div>
)
