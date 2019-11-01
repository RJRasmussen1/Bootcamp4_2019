import React from 'react';

class AddBldng extends React.Component {
	constructor(props) {
		super(props);

		this.ChangeHandler= this.ChangeHandler.bind(this);
		this.enterHandler= this.enterHandler.bind(this);
	}
	
    enterHandler = (event) => {
    let name = this.state.name;
    let code = this.state.code;
	let address = this.state.address;
    let data = this.props.data;
    let id = data.length;
	this.props.AddBldngfunction(name, code, address, id)
	}
    

    ChangeHandler = (event) => {
	let name2 = event.target.name;
    let value1 = event.target.value;
    this.setState({[name2]: value1});
    }
    
    render() {
		return (
			
			<form onSubmit={this.enterHandler}>
	            <h3>Add a Building</h3>
			    <div className="row">
					<p>Enter a name:</p>
		            <input
		                type='text'
						name='name'
						//value={this.state.name}
		                onChange={this.ChangeHandler}
		             />
				</div>
				<div className="row">
					<p>Enter a code:</p>
		            <input
		                type='text'
						name='code'
						//value={this.state.code}
		                onChange={this.ChangeHandler}
		             />
				</div>
				<div className="row">
					<p>Enter an address:</p>
		            <input
		                type='text'
						name='address'
		                onChange={this.ChangeHandler}
		            />
				</div>
				<input
	        type='submit'
	      />
      </form>
		);
	}
}
export default AddBldng;
