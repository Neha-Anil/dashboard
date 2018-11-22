import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import gip from './giplogo2.png';
const Logo= ()=>{
	return (
		<div className='logo'>
		<div className='mt0' style={{paddingLeft:'20px'}}>
		<Tilt className="Tilt br2 shadow-2" options={{ max : 60 }} style={{ height: 100, width: 100 }} >
 		<img src={gip} alt='logo'/>
		</Tilt>
		</div>
		</div>
	);
}
export default Logo;