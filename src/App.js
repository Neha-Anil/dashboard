import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Intro from './Components/Intro/Intro';
import Announcement from './Components/Announcement/Announcement';
import Graph from './Components/Graph/Graph';
import Video from './Components/Video/Video';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state={
			route:'signin',
			isSignedIn:false,
      user:{
        id:'',
        name:'',
        logintime:'',
        desig:'',
        logindate:''
      }
		}
	}

  loadUser=(data)=>{
    this.setState({user:{
      id:data.op_id,
        name:data.op_name,
        desig:data.designation
    }})
    var t=new Date()
    this.setState(Object.assign(this.state.user,{logintime:t.toTimeString()}))
    this.setState(Object.assign(this.state.user,{logindate:t.toDateString()}))
  }

	onRouteChange=(route)=>{
	  if(route==='signout'){
	    this.setState({isSignedIn:false});
	  }else if (route==='home'){
	    this.setState({isSignedIn:true});
	  }
	  this.setState({route:route});
	}  
  render() {
    return (
    	<div>
      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
      
      {
      this.state.route==='home'?
      <div className='outerbox'>
      <div style={{display:'flex'}}>
      <Graph />
      <Video />
      </div>
      <div style={{display:'flex',}}>
      <Intro name={this.state.user.name} date={this.state.user.logindate} id={this.state.user.id} des={this.state.user.desig} time={this.state.user.logintime}/>
      <Announcement />
      </div>
      </div>
      :(this.state.route==='register'?
        <div>
        <Particles className='part'
              params={{
                particles: {
                  interactivity:{
                    detect_on:'canvas',
                    
                  },
                  number:{
                    value:80,
                    density:{
                      enable:true,
                      value_area:800
                    }
                  }

                    }
                  }
                }
              
            />
        <Logo />
      	<Register onRouteChange={this.onRouteChange} />
        </div>
              :
              <div>
              <Logo />
              <Particles className='part'
              params={{
                particles: {
                  interactivity:{
                    detect_on:'canvas',
                    
                  },
                  number:{
                    value:80,
                    density:{
                      enable:true,
                      value_area:800
                    }
                  }

                    }
                  }
                }
              
            />
              <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              </div>
  		)}
      </div>
    );
  }
}

export default App;
