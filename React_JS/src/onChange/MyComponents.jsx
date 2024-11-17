// {onChange} function
// An function trigged when change takes place
// /Input, textarea,select,radio,label

import React, {useState} from 'react';

function MyComponent () {

    const [name,setName] = useState("Guest");
    const [Quantity, setQuantity] = useState(1);
    const[Comment, setComment] = useState("");

    const[payment, setPayment] = useState("");

    const[shipping, setShipping] = useState("");

    function eventhandleer(event) {
      setName(event.target.value);
    }

    function eventHandlerQuantity(event) {
        setQuantity(event.target.value);
    }

    function eventHandlerComment(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
    <input value={name} onChange={eventhandleer}/>
    <p>Name: {name}</p>

    <input value={Quantity} onChange={eventHandlerQuantity} type="number"/>
    <p>Quantity: {Quantity}</p>

    <textarea value={Comment} onChange={eventHandlerComment} placeholder='Anything else ?'>
    </textarea>
    <p>Comment: {Comment}</p>

    <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Master card">Mastercard</option>
        <option value="Gift card">Giftcard</option>
    </select>
    <p>Payment: {payment}</p>

    <label>
        <input type="radio" value="pick up"
        checked={shipping === "pick up"}
        onChange={handleShippingChange} />
        Pick Up
    </label>
        <br />
    <label>
        <input type="radio" value="delivery" checked={shipping === "delivery"} onChange={handleShippingChange}/>
        Delivery
    </label>   

    <p>Shipping: {shipping}</p>
  </div>
    );

}

export default MyComponent;