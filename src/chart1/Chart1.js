import React, { Component } from 'react';
import './chart1.css';
import logo from './img1.png';
import { Bar} from 'react-chartjs-2';

class Chart1 extends Component {
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
        labels: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12','13','14'],
        datasets:[
          {
            label:'Mitre',
            data:[
              10,
              7,
              2,
              15,
              7,
              6,
              10,
              7,
              2,
              5,
              7,
              6,
              16,
              4
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
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
      <div className='chart-main-1'>
        {/* <img src={logo} alt="logo" width="100%" height="100%"/> */}
        <Bar
            data={this.state.chartData}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Largest Cities In '+this.props.location,
                fontSize:25
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
          />
      </div>  

    );
  }
}

export default Chart1;
