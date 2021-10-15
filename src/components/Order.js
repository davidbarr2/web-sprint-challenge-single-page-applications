import React, {useState} from "react";

    const Order = () => {

    const [form,setForm]=useState({name: '', size:'medium', ham: false, pineapple: false, greenPepper: false, onion: false, special:''})

    const change = (event) => {
        const { name, type, value, checked} = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setForm({...form, [name]: valueToUse})
        //setFormErrors(name,valueToUse)
    }

  return (
    <div>
        <form id='pizza-form'>
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

        <button id="order-button">Submit</button>
        </form>
    </div>
  );
};
export default Order;
