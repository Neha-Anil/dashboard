import React from 'react';

class SignIn extends React.Component{
	constructor(props){
		super();
		this.state={
			op_id:'',
			password:''
		}
	}

	onIdChange=(event)=>{
		this.setState({op_id:event.target.value})
	}

	onPasswordChange=(event)=>{
		this.setState({password:event.target.value})
	}

	onSubmitSignIn=()=>{
		fetch('http://localhost:3000/msignin',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				id:this.state.op_id,
				password:this.state.password
			})
		})
		.then(response=>response.json())
		.then(user=>{
			if(user.m_id){
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
			else{
				alert('Wrong credentials!');
			}
		})
		
	}
	render(){
	return(
	<article className="br2 ba dark-gray b--black-10 mv4 shadow-3 w-200 w-150-m w-25-l mw6 center">
		<main className="pa4 black-80">
	  <div className="measure center">
	    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
	      <center><legend className="f1 fw6 ph0 mh0">Sign In</legend></center>
	      <div className="mt3">
	        <label className="db fw6 lh-copy f6" htmlFor="opid">Manager-Id</label>
	        <input 
	        onChange={this.onIdChange}
	        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	        type="text" 
	        name="op-id"  id="op-id"/>
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
	       value="Sign in"/>
	       </center>
	    </div>
	    <center>
	    <div className="lh-copy">
	      <p 
	      onClick={()=>this.props.onRouteChange('register')}
	      className="f6 b link dim pointer black db">Register</p>
	     
	    </div>
	    </center>
	  </div>
	</main>
	</article>
		);
	}
}
export default SignIn;