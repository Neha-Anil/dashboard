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
          categories: ['Line 1','Line 2', 'Line 3','Line 4','Line 5', 'Line 6', 'Line 7','Line 8']
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
          <div>
		      <h1 className='head'><center>Current Production</center></h1>
  				<center>
    			<Chart options={this.state.options} series={this.state.series} type="bar" width={900} height={350} />
  				</center>
          </div>
		);
}
}
export default Graph;