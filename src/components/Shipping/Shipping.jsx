import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedUser, setLoggedUser] = useContext(userContext)

    const onSubmit = data => console.log(data);
    console.log(watch("example")); // watch input value by passing the name of it
    return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
        <input name="name" defaultValue={loggedUser.name} ref={register({ required: true })} placeholder='Name'/>
        {errors.name && <span className="error">Name is required</span>}
        

        <input name="email" defaultValue={loggedUser.email} ref={register({ required: true })} placeholder='Email'/>
        {errors.email && <span className="error">Email is required</span>}
        

        <input name="Address" ref={register({ required: true })} placeholder='Address'/>
        {errors.address && <span className="error">Address is required</span>}
        
        <input name="phone" ref={register({ required: true })} placeholder='Phone'/>
        {errors.phone && <span className="error">Phone is required</span>}

        <input type="submit" />
    </form>
  );
};

export default Shipping;