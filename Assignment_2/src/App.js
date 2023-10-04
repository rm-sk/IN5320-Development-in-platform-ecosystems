import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./SearchBar.js";
import Table from "./Table.js";
import PageSize from "./PageSize";
import Pagination from "./Pagination";


function App() {
	/* Create state:
	- apiData: List containing dictionaries of countries from API.
	- searchQuery: The query parameter that should be added to &search=
	- pageSize: max number of entries per page
	- pageNumber: The page that is requested
	*/
	
	const [apiData, setApiData] = useState([]);
	const [tempQuery, setTempQuery] = useState(); 
	const [searchQuery, setSearchQuery] = useState(); // Default = No search query
	const [pageSize, setPageSize] = useState(10);
	const [pageNumber, setPageNumber] = useState(1); //Default = Page 1
	
	// functions for implementing search
	const set_search = event => setTempQuery(event.target.value);
	const search_api = () => {
		setSearchQuery(tempQuery);
		setPageNumber(1);
	}
	
	// function for implementing max number of entires per page
	const set_page_size = event => {
		setPageSize(event.target.value);
		setPageNumber(1);
	}

	// functions for setting page number
	const prev_page = () => setPageNumber(pageNumber - 1);
	const next_page = () => setPageNumber(pageNumber + 1);

	useEffect(() => {
	// All parameters are appended to this URL.
	let apiQuery = "https://dhis2-app-course.ifi.uio.no/api?";

	// If searchQuery isn't empty add &search=searchQuery to the API request.
	if (searchQuery) {
		apiQuery = apiQuery + "&search=" + searchQuery;
	}

	// Add what page we are requesting to the API request.
	apiQuery = apiQuery + "&pageSize=" + pageSize;

	// Add what page we are requesting to the API request.
	apiQuery = apiQuery + "&page=" + pageNumber;

	// Query data from API.
	console.log("Querying: " + apiQuery);
	fetch(apiQuery)
		.then((results) => results.json())
		.then((data) => {
		// Then add response to state.
		setApiData(data);
		});
	}, [searchQuery, pageSize, pageNumber]); // Array containing which state changes that should re-run useEffect()

	return (
	<div className="App">
		<h1>Country lookup</h1>
		<SearchBar set_search={set_search} search_api={search_api}/>
		<Table apiData={apiData} />
		<PageSize value={pageSize} set_page_size={set_page_size}/>
		<Pagination prev={prev_page} next={next_page} pageNumber={pageNumber} apiData={apiData}/>
	</div>
	);
}

export default App;
