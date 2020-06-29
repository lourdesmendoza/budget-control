import React, { useState } from 'react';
import shortid from 'shortid';
import Error from './Error';

const Form = ({ addNewExpense }) => {
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
            id: shortid.generate()
        }
        console.log(expenses);

        // Send the expense to the main component
        addNewExpense(expenses);


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
 
export default Form;