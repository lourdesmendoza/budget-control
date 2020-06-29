import React from 'react';

const List = ({ expenses }) => {
    return ( 
        <div className="gastos-realizados">
            <h2>List</h2>
            {expenses.map(expense =>(
                
            ))}
        </div>
     );
}
 
export default List;