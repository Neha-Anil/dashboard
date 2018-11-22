import React from 'react';
import './intro.css';
const Intro=({name,date,id,des,time})=>{
	return(
		<div className='intro br2 shadow-3'>
		<div className='head'><h1>Operator Details</h1></div>
		<center>
		ID:{id}<br/>
		Name:{name}<br/>
		Designation:{des}<br/>
		Login Date:{date}<br/>
		Login Time:{time}<br/>
		</center>
		</div>
		);
}
export default Intro;