import React from 'react';

class Register extends React.Component{
	constructor(props){
		super();
		this.state={
			name:'',
			id:'',
			password:'',
			designation:'',
			opimage:''
		}
	}

	onNameChange=(event)=>{
		this.setState({name:event.target.value})
	}

	onIdChange=(event)=>{
		this.setState({id:event.target.value})
	}

	onPasswordChange=(event)=>{
		this.setState({password:event.target.value})
	}
	onDesignationChange=(event)=>{
		this.setState({designation:event.target.value})
	}
	onImageChange=(event)=>{
		this.setState({opimage:document.getElementById('image').files[0]})
		fetch('http://localhost:3000/image',{
			method:'post',
			headers:{'Content-Type':'multipart/form-data'},
			body:JSON.stringify({
				id:this.state.id,
				opimage:this.state.opimage
			})
		})
		
	}

	onSubmitSignIn=()=>{
		if(!this.state.id || !this.state.password|| !this.state.name || !this.state.designation){
			alert('Fields must not be empty')
		}
		else if(!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/.test(this.state.password))){
			alert('Password must be minimum 8 characters with a number and a special character')
		}
		else{
		fetch('http://localhost:3000/register',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				id:this.state.id,
				password:this.state.password,
				name:this.state.name,
				designation:this.state.designation
			})
		})
		.then(response=>response.json())
		.then(user=>{
			if(user.op_id){
				this.props.onRouteChange('signin');
			}
		})
		}
	}
	render(){
	return(
	<article className=" br2 ba dark-gray b--black-10 mv1 shadow-3 w-200 w-150-m w-25-l mw6 center">
		<main className="pa4 black-80">
	  <div className="measure center">
	    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
	      <center><legend className="f1 fw6 ph0 mh0">Register</legend></center>
	      <div className="mt3">
	        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
	        <input 
	        onChange={this.onNameChange}
	        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	        type="text" 
	        name="name"  id="name"/>
	      </div>
	      <div className="mt3">
	        <label className="db fw6 lh-copy f6" htmlFor="op-id">Operator-Id</label>
	        <input 
	        onChange={this.onIdChange}
	        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	        type="text" 
	        name="op-id"  id="op-id"/>
	      </div>
	      <div className="mt3">
	        <label className="db fw6 lh-copy f6" htmlFor="des">Designation</label>
	        <input 
	        onChange={this.onDesignationChange}
	        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	        type="text" 
	        name="des"  id="des"/>
	      </div>
	      <div className="mt3">
	        <label className="db fw6 lh-copy f6" htmlFor="image">Upload Image</label>
	        <input 
	        onChange={this.onImageChange}
	        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	        type="file" 
	        name="opimage"  id="image"/>
	      </div>
	      <div className="mv3">
	        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
	        <input 
	        onChange={this.onPasswordChange}
	        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
	      </div>
	    </fieldset>
	    <div className="">
	    <center>
	      <input 
	       onClick={this.onSubmitSignIn}
	       className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib"
	       type="submit"
	       value="Register"/>
	       </center>
	    </div>
	  </div>
	</main>
	</article>
		);
	}
}
export default Register;