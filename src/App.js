import React, { useState } from 'react';
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
