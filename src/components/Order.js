import React, {useEffect, useState} from "react";
import * as yup from 'yup'
import axios from 'axios'

    const schema = yup.object().shape({
        name: yup.string().required().min(2,'name must be at least 2 characters'),
        size: yup.string().oneOf(['small','medium','large','extra large']),
        ham: yup.boolean(),
        pineapple: yup.boolean(),
        greenPepper: yup.boolean(),
        onion: yup.boolean(),
        special: yup.string(),
    })

const Order = () => {

    const initialFormValues = {name: '', size:'medium', ham: false, pineapple: false, greenPepper: false, onion: false, special:''}

    const [form,setForm]=useState(initialFormValues)
    const [disabled, setDisabled] = useState(true)
    const [errors, setErrors] = useState({name: ''})
    const [databaseRecord, setDatabaseRecord] = useState()

    const change = (event) => {
        const { name, type, value, checked} = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setForm({...form, [name]: valueToUse})
        setFormErrors(name,valueToUse)
    }

    const setFormErrors = (name,value) => {
        yup.reach(schema,name).validate(value)
            .then(() => setErrors({...errors, [name]: ''}))
            .catch( err => setErrors({...errors, [name]: err.errors[0]}))
    }

    const submit = event => {
        event.preventDefault()
        const pizza = {name: form.name.trim(), size: form.size, ham: form.ham, pineapple: form.pineapple, greenPepper: form.greenPepper, onion: form.onion, special: form.special}
        axios.post('https://reqres.in/api/orders', pizza)
            .then( res => {
                console.log(res.data)
                setDatabaseRecord(res.data)
            })
            .catch( err => console.log('error ' + err))
        setForm(initialFormValues)
    }

    useEffect(() => {
        schema.isValid(form).then(valid => setDisabled(!valid))
    }, [form])

  return (
    <div>
        <div>{errors.name}</div>
        <form id='pizza-form' onSubmit={submit}>
            <label>Name
                <input id="name-input" name="name" type="text" onChange={change} value={form.name}/>
            </label>

            <label>Pizza Size
                <select id="size-dropdown" value={form.size} name="size" onChange={change}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="extra large">Extra Large</option>
                </select>
            </label>

            <label>Ham
                <input onChange={change} checked={form.ham} name="ham" type="checkbox"/>
            </label>
            <label>Pineapple
                    <input onChange={change} checked={form.pineapple} name="pineapple" type="checkbox"/>
            </label>
            <label>Green Pepper
                    <input onChange={change} checked={form.greenPepper} name="greenPepper" type="checkbox"/>
            </label>
            <label>Onion
                    <input onChange={change} checked={form.onion} name="onion" type="checkbox"/>
            </label>

            <label>Special Instructions
                    <input id="special-text" name="special" type="text" onChange={change} value={form.special}/>
                </label>

            <button id="order-button" disabled={disabled}>Submit</button>
        </form>
    </div>
  );
};
export default Order;
