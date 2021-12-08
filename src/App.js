import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import SpentSoFar from './components/SpentSoFar';
import ListOfItems from './components/ListOfItems';

const App = () => {
	return (
			<div className='container'>
				<h3 className='mt-3'>My Budget Planner</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<Remaining />
					</div>
					<div className='col-sm'>
						<SpentSoFar />
					</div>
				</div>
        <h3 class name='mt-3'>Expenses</h3>
        <div className='row mt-3'>
				<div className='col-sm'>
					<ListOfItems />
				</div>
			</div>
			</div>
	);
};

export default App;