import React, { useState } from 'react';
import PropType from 'prop-types';
import shortid from 'shortid';
import Error from './Error';

const Form = ({ setExpense, saveCreateExpense }) => {
    const[name, setName ] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false);

    //Add expenses
    const addExpenses = e => {
        e.preventDefault();

        // Validation
        if(quantity < 1 || isNaN(quantity) || name.trim() === '') {
            setError(true);
            return;
        }
           setError(false);



        // Build spending
        const expenses = {
            name,
            quantity,
            id: shortid.generate(),
        }

        // Send the expense to the main component
        setExpense(expenses);
        saveCreateExpense(true);


        // Resent form
        setName('');
        setQuantity(0);
    }

    return ( 
        <form
            onSubmit={addExpenses}>

            <h2>Add your expenses here</h2>
            { error ? 
                <Error messageError="Both fields are required or incorrect quote" />
                :
                null
            }
            <div className="campo">
                <label>Name of the expense</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ex.transort"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Quantity of the expense</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ex.300"
                    value={quantity}
                    onChange={e => setQuantity(parseInt(e.target.value))}
                />
            </div>

            <input 
                type="submit"
                className="button-primart u-full-width"
                value="Add expenses"
                


            />
        </form>
     );
}
 
Form.propType = {
    setExpense: PropType.func.isRequired,
    saveCreateExpense: PropType.func.isRequired,

}
export default Form;