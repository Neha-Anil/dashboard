import React from 'react';
import './graph.css';
const Graph=()=>{
	return(
		<div className='gra br2 shadow-3'>
		<div className='head'><h1>Count Of Products Manufactured</h1></div>
		<div class="card center" style={{width:'14vw',marginTop:'0px',height:'20vh'}}>
  		<div class="card-body bg">
    	<h5 class="card-title" style={{position:'relative',left:'13vh'}}><font size='25'>13</font></h5>
    	</div>
    	<a href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" class="center bt btn btn-primary" data-toggle="collapse">
    	Go somewhere</a>
  			<div class="collapse" id="collapseExample">
  				<div class=" graph card card-body" style={{width:'55vw',height:'30vh'}}>
    			Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  				</div>
			</div>
		</div>
		</div>
		);
}
export default Graph;