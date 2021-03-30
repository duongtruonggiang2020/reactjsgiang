import React, { Component } from 'react';
import './status.css';
import logo from './status.png.PNG';

// import {Line} from 'react-chartjs-2';
import ChartLine from './ChartLine';


class Status extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
   // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }
  render() {
    return (
      <div className='status-tab'>
        <img src={logo} alt="logo" width="100%" height="100%"/>
          {/* <article className="canvas-container">
          <ChartLine chartData={this.state.chartData}  location="Massachusetts" legendPosition="bottom"/>
          
          </article> */}
      </div>  

    );
  }
}

export default Status;
