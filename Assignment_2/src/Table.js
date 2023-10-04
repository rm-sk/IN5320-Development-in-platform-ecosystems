function Table(props) {
	console.log(props.apiData);
	
	if (!props.apiData.results) {
		
		// If the API request isn't completed return "loading...""
		return <p>Loading...</p>;
	} else {
		
		// Write your code here:
		return <table>
			<tbody>
				<tr id="top-row"> 
					<th>Country</th>
					{props.apiData.results.map(entry => {return <td> {entry.Country} </td>})}
				</tr>
				<tr>
					<th>Continent</th>
					{props.apiData.results.map(entry => {return <td> {entry.Continent} </td>})}
				</tr>
				<tr>
					<th>Population</th>
					{props.apiData.results.map(entry => {return <td> {entry.Population} </td>})}
				</tr>
				<tr>
					<th>Population Growth</th>
					{props.apiData.results.map(entry => {return <td> {entry.PopulationGrowth} </td>})}
				</tr>
			</tbody>
		</table>;
	}
}

export default Table;
