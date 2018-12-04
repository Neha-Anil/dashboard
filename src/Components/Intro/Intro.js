import React from 'react';
import './intro.css';
const Intro=({name,date,id,des,time})=>{
	return(
		<div className='intro br2 shadow-3'>
		<div className='head'><h1>Operator Details</h1></div>
		<center>
		<table>
		<tr><td className='h'>ID:</td><td>{id}</td></tr>
		<tr><td className='h'>Name:</td><td>{name}</td></tr>
		<tr><td className='h'>Designation:</td><td>{des}</td></tr>
		<tr><td className='h'>Login Date:</td><td>{date}</td></tr>
		<tr><td className='h'>Login Time:</td><td>{time}</td></tr>
		</table>
		</center>
		</div>
		);
}
export default Intro;