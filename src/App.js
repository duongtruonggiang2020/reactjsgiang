import './App.css';
import Header from './header/Header'
import Chart1 from './chart1/Chart1'
import Chart2 from './chart2/Chart2'
import News from './news/news'
import Status from './status/Status'


function App() {
  return (
    <div className='app'>
      <div className="header"><Header/></div>
      <div className="content">
        <div className="status"><Status/></div>  
        <div className="chart1"><Chart1/></div>  
        <div className="chart2"><Chart2/></div>
        <div className="news"><News/></div>
      </div>
    </div>
  );
}

export default App;
