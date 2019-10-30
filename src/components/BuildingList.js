import React from 'react';

class BuilingList extends React.Component {

	render() {
		const { data, filter, selectedUpdate } = this.props;
		var input = filter.toUpperCase();

		const buildingList = data.filter(directory => {
			return directory.name.toUpperCase().indexOf(input) >= 0
	    }).map(directory => {
			return (
				<tr key={directory.id} >
					<td>{directory.code} </td>
					<td onClick = { () => 
						selectedUpdate(directory.id)}> {directory.name} 
					</td>
				</tr>
			);
		});
		return <div>{buildingList}</div>;
	}
}
export default BuilingList;