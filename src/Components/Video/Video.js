import React from 'react';
import './vid.css';
class Video extends React.Component{
	constructor(){
		super();
		this.state={
			url:'MJu4CosK6RQ'
		}
	}
	render(){
	return(
		<div className='vid br2 shadow-3'>
		<div className='head'><h1>Video Assistance</h1></div>
		<center>
		<div style={{position:'relative',bottom:'25px'}}>
		<iframe width="400" height="200"
		src="https://www.youtube.com/embed/MJu4CosK6RQ">
		</iframe>
		</div>
		</center>
		</div>
		);
	}
}
export default Video;