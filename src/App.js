import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import ControlBudget from './components/ControlBudget';

function App() {
	// Set states
	const [budget, saveBudget] = useState(0);
	const [remaining, saveRemaining] = useState(0);
	const [showQuestion, updateQuestion] = useState(true);
	const [expenses, setExpenses] = useState([]);
	const [expense, setExpense] = useState({});
	const [createExpense, saveCreateExpense] = useState(false);

	//useEffect update remaining

	useEffect(() => {
		if(createExpense) {
			// Add new budget
			setExpenses([
				...expenses,
				expense
			]);


			// Subtraction from the current budget
			const budgetRemaining = remaining - expense.quantity;
			saveRemaining(budgetRemaining);

			// Reset
			saveCreateExpense(false);

		}
	}, [createExpense, expense, expenses, remaining]);


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
									setExpense={setExpense}
									saveCreateExpense={saveCreateExpense}
								/>
							</div>
							<div className="one-half column">
								<List
									expenses={expenses}
								/>
								<ControlBudget
									budget={budget}
									remaining={remaining}
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
