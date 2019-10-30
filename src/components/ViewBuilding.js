import React from 'react';

class ViewBuilding extends React.Component {

	render() {
		const { data, selectedBuilding } = this.props;

		const building = data.filter(directory =>
			directory.id === selectedBuilding
		).map(directory => {
			return (
				<div>
					<h3>Information</h3>
					<p>

						<tr>Code: {directory.code}</tr>
						<p />
						<tr>Name: {directory.name}</tr>
						<p />
						<tr>Address: {directory.address}</tr>
						<p />
						<tr>latitude: { directory.coordinates &&
										directory.coordinates.latitude}</tr>
						<tr>longitude:{ directory.coordinates &&
										directory.coordinates.longitude}</tr>

					</p>
				</div>
			);
		});
		return (
			<div>
				{selectedBuilding === 0 &&
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
				}
				{building}
			</div>
		);
	}
}
export default ViewBuilding;