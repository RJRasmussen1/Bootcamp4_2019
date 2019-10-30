import React from 'react';

class RemoveBuilding extends React.Component {

	enterHandler = (event) => {
    event.preventDefault();
		let code = this.state.code;
		let data = this.props.data;
		let result = data.filter(obj => {
		  return obj['code'] === code
		});

		if(result.length === 0) {
			alert("Error");
		} else {
			let index = data.findIndex(obj => {
			  return obj['code'] === code
			});
			data.splice(index, 1);
		}
	}

	ChangeHandler = (event) => {
		let name2 = event.target.name;
        let value1 = event.target.value;
    this.setState({[name2]: value1});
	}

	render() {
		return (
			<form onSubmit={this.enterHandler}>
	        <h3>Remove Building</h3>
			<div className="row">
				<div className="row">
					<p>Enter a code:</p>
		            <input
		                type='text'
						name='code'
		                onChange={this.ChangeHandler}
		            />
				</div>
			</div>
			<input
	            type='submit'
	        />
            </form>
		);
	}
}
export default RemoveBuilding;