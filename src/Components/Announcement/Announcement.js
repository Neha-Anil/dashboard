import React from 'react';
import './ann.css';

class Announcement extends React.Component{
	constructor(props) {
    super(props);


    }
   onAnnChange=(event)=>{
    this.setState({message:event.target.value})
  }    
  handleMsg=()=>{
    console.log(document.getElementById('msg').value)

  }
	render(){
	return (
    <div>
     <div style={{display:'flex',justifyContent:'center'}}>
    <div style={{display:'flex',justifyContent:'center',padding:'15px'}} className='shadow-5 pat'>
      <div className='h'>Leave a message!</div>
      <div style={{display:'flex'}}>
      <input className='f3 pa2 w-80 t'
      
       type='text' id="msg" />
      <button 
      onClick={this.handleMsg}
      style={{display:'flex'}} className=' w-20 grow f4 link ph3 pv2 dib white pointer bg-light-purple'><center>Enter</center></button>
      </div>
    </div>
    </div>
    </div>
    );
	}
}
export default Announcement;