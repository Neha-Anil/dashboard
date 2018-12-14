import React from 'react';
import './graph.css';
import Chart from 'react-apexcharts'
class Graph extends React.Component{
  constructor(props){
    super();
    this.state = {
      options: {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
<<<<<<< HEAD
          categories: ['Line 1','Line 2', 'Line 3','Line 4','Line 5', 'Line 6', 'Line 7','Line 8']
=======
          categories: ['Nov 23','Nov 24', 'Nov 25','Nov 26','Nov 27', 'Nov 28', 'Nov 29','Nov 30']
>>>>>>> 72e78e608f83fe5a08669133527426dad33ed36c
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  }
  render(){
	return(
<<<<<<< HEAD
          <div>
		      <h1 className='head'><center>Current Production</center></h1>
  				<center>
    			<Chart options={this.state.options} series={this.state.series} type="bar" width={900} height={350} />
  				</center>
          </div>
=======
		<div className='gra br2 shadow-3'>
		<div className='head'><h1>Count Of Products Manufactured</h1></div>
		<div class="card center" style={{width:'14vw',marginTop:'0px',height:'20vh'}}>
  		<div class="card-body bg">
    	<h5 class="card-title" style={{position:'relative',left:'13vh'}}><font size='25'>13</font></h5>
    	</div>
    	<a href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" class="center bt btn btn-primary" data-toggle="collapse">
    	view graph</a>
  			<div class="collapse" id="collapseExample">
  				<div class=" graph card card-body" style={{width:'48vw',height:'37vh'}}>
    			<Chart options={this.state.options} series={this.state.series} type="bar" width={600} height={180} />
  				</div>
			</div>
		</div>
		</div>
>>>>>>> 72e78e608f83fe5a08669133527426dad33ed36c
		);
}
}
export default Graph;