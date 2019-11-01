import React from 'react';

class AddBldng extends React.Component {
	constructor(props) {
		super(props);

		this.ChangeHandler= this.ChangeHandler.bind(this);
		this.enterHandler= this.enterHandler.bind(this);
	}
	
    enterHandler = (event) => {
	this.props.AddBldngfunction( this.state.name,  this.state.code,  this.state.address,  this.state.id)
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
