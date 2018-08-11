import React, {Fragment} from 'react';
import './index.css';

const Form = ({
    city='',
    submit=()=>{},
    change=()=>{},
}) => {
    return (
        <form onSubmit={submit}>
            <input type="text" value={city} onChange={change}/>
            <input type="submit" value="Go!"/>
        </form>
    );
}

export default Form;