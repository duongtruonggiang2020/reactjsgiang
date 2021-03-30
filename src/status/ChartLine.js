import React, {Component} from 'react';
import { Line} from 'react-chartjs-2';

class ChartLine extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  render(){
    return (
      <div className="chart">
        <Line
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
    )
  }
}

export default ChartLine;
