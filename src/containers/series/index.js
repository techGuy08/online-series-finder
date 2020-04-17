import React, { Component } from 'react';
import Intro from '../../Component/intro';
import SeriesList from '../../Component/SeriLists';
class Series extends Component {
	state = {
		results: [],
		isfetching: false,
		serieName: '',
		fetched: () => {
			return '675657';
		}
	};
	onSeriesChange = (e) => {
		this.setState({ isfetching: true, serieName: e.target.value });
		fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
			.then((response) => response.json())
			.then((json) => this.setState({ results: json, isfetching: false }));
	};
	render() {
		const { results, isfetching, serieName } = this.state;
		return (
			<div>
				<header className="App-header">
					<h1>Online Series Finder</h1>
				</header>
				<Intro message="Search for Series" />
				<input type="text" placeholder="search" className="search-bar" onChange={this.onSeriesChange} />
				{!isfetching &&
				results.length === 0 &&
				serieName === '' && <h4>please enter the Serie's Name {serieName}</h4>}
				{!isfetching && results.length === 0 && serieName !== '' && !isfetching && <h4>No match was found</h4>}
				{!isfetching &&
				results.length !== 0 &&
				serieName !== '' && <h4>the number of results found is : {results.length}</h4>}
				{isfetching && <h4>Loading...</h4>}
				{!isfetching && <SeriesList list={this.state.results} />}
			</div>
		);
	}
}
export default Series;
