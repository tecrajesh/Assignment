
import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headers: [],
			columns: [],
			characters: [],
			dynamicData: []
		}
	}
	componentDidMount() {
		this.init();
	}

	init() {
		const { metaInfo } = this.props;
		this.setState({
			headers: metaInfo.headers,
			columns: metaInfo.columns,
			characters: metaInfo.data,
			dynamicData: metaInfo.dynamicColumns
		});
	}

	render() {
		const { characters, headers, columns, dynamicData } = this.state

		return (
			<div className="container">
				<div className="options">
					<div> <label>Start Date</label> <input type="date" id="startDate" onChange={this.handleDate} /></div>
					<div> <label>End Date</label> <input type="date" id="endDate" onChange={this.handleDate} /> </div>
					<div><input type="text" className="searchInput" onChange={this.handleChange} placeholder="Search..." /></div>
				</div>
				<div className="results">
					<Table characterData={characters} headerData={headers} columnData={columns} dynamicData={dynamicData} />
				</div>

			</div>
		)
	}

	handleChange = (e) => {
		// Variable to hold the original version of the list
		let currentList = [];
		// Variable to hold the filtered list before putting into state
		let newList = [];

		// If the search bar isn't empty
		if (e.target.value !== "") {
			// Assign the original list to currentList
			currentList = this.props.metaInfo.data;
			// Use .filter() to determine which items should be displayed
			// based on the search terms
			newList = currentList.filter(item => {
				// change current item to lowercase
				const lc = item.name.toLowerCase();
				// change search term to lowercase
				const filter = e.target.value.toLowerCase();
				// check to see if the current list item includes the search term
				// If it does, it will be added to newList. Using lowercase eliminates
				// issues with capitalization in search terms and search content
				return lc.includes(filter);
			});
		} else {
			// If the search bar is empty, set newList to original task list
			newList = this.props.metaInfo.data;
		}
		// Set the filtered state based on what our rules added to newList
		this.setState({
			characters: newList
		});
	}

	getDate = (dateId) => { const date = document.getElementById(dateId).value; return date && new Date(date) }

	handleDate = (e) => {
		var stDate = this.getDate("startDate");
		var endDate = this.getDate("endDate");
		var compDate = endDate && stDate && endDate - stDate;

		if (compDate < 0) {  // endDate should be less than start date
			alert("To Date cannot be smaller than From Date");
			return false;
		}
		// Variable to hold the original version of the list
		let currentLists = [];
		// Variable to hold the filtered list before putting into state
		let newLists = [];

		// If the search bar isn't empty
		if (e.target.value !== "") {
			// Assign the original list to currentList
			currentLists = this.props.metaInfo.data;

			// Use .filter() to determine which items should be displayed
			// based on the search terms
			newLists = currentLists.filter(item => {
				// change current item to lowercase
				const sc = new Date(item.startDate);
				const ec = new Date(item.endDate);
				// change search term to lowercase

				const startCtn = sc > stDate;
				const endCtn = ec < endDate;
				if (stDate && endDate) {
					return startCtn && endCtn
				}
				return startCtn && stDate || endCtn && endDate
			});
		} else {
			// If the search bar is empty, set newList to original task list
			newLists = this.props.metaInfo.data;
		}
		// Set the filtered state based on what our rules added to newList
		this.setState({
			characters: newLists
		});
	}
}

export default App;