import React, { Fragment, useState } from 'react';
import Error from './Error';

const Question = ({ saveBudget, saveRemaining, updateQuestion }) => {
    // Set state
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false);

    // Budget reading function
    const defineBudget = e => {
        setQuantity(parseInt(e.target.value, 10))
    }

    //Submit
    const addBudget = (e) => {
        e.preventDefault();

        //Validation
        if(quantity < 1 || isNaN(quantity)) {
            setError(true);
            return;
        }

        // Is valid
        setError(false);
        saveBudget(quantity);
        saveRemaining(quantity);
        updateQuestion(false)
    }


    return ( 
        <Fragment>
            <h2>Place your budget</h2>
            {error ? <Error messageError="The budget is wrong" /> : null}

            <form
                onSubmit={addBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Place your budget"
                    onChange={defineBudget}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define budget"
                />
            </form>
        </Fragment>
     );
}
 
export default Question;