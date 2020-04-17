import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Series from '../../containers/series';
import SingleSeries from '../../containers/singleSerie';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<HashRouter>
					<Switch>
						<Route exact path="/" component={Series} />
						<Route exact path="/series/:id" component={SingleSeries} />
					</Switch>
				</HashRouter>
			</div>
		);
	}
}
export default App;
