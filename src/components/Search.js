import React from 'react';

class Search extends React.Component {
	filterUpdate(value) {
		const val = value;
		this.props.filterVal(val)
	}
	render() {
		const { filtervalue, filterUpdate} = this.props
		return (
			<form>
				<input type="text"
				ref='filterInput'
				placeholder="Type to Filter"
				value={filtervalue}
				onChange={() => {filterUpdate(this.refs.filterInput.value)} }
				/>
			</form>
		)
	}
}
export default Search;
