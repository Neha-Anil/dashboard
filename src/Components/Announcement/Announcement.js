import React from 'react';
import './ann.css';

class Announcement extends React.Component{
	constructor(props) {
    super(props);

    }
       
	render(){
	return (
      <div className='ann br2 shadow-3'>
      <div className='head'><h1>Organizational Announcement</h1></div>
      <center><i><h2 className='an'>Let's meet the deadline soon!</h2></i></center></div>
    )
	}
}
export default Announcement;