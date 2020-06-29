import React, { useState } from 'react';
import Question from './Expense.js/Question';
import Form from './Expense.js/Form';
import List from './Expense.js/List';

function App() {
	// Set states
	const [budget, saveBudget] = useState(0);
	const [remaining, saveRemaining] = useState(0);
	const [showQuestion, updateQuestion] = useState(true);
	const [expenses, setExpenses] = useState([]);

	const addNewExpense = expense => {
		setExpenses([
			...expenses,
			expense
		])
	}

	return (
		<div className="container">
			<header>
				<h1>Weekly expense</h1>

				<div className="contenido-principal contenido">
					{ showQuestion ? (
						<Question
							saveBudget={saveBudget}
							saveRemaining={saveRemaining}
							updateQuestion={updateQuestion}

						/>
					)
					: (
						<div className="row">
							<div className="one-half column">
								<Form
									addNewExpense={addNewExpense}
								/>
							</div>
							<div className="one-half column">
								<List
									expenses={expenses}
								/>
							</div>
						</div>
					)}
				</div>
			</header>
		</div>
	);
}

export default App;
