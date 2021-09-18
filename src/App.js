import React from 'react';
import { Match, WeekPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component{
  
  state ={
    data : {},
    week : '',
  }
   async componentDidMount(){

    const fetchedData= await fetchData();
    this.setState({data : fetchedData});
  }

  handleWeekChange = async(week) => {


    const fetchedData = await fetchData(week);

    this.setState ({ data: fetchedData, week: week});
    
  }

  
  render(){
   
    const data=this.state;

    return (
      <div className={styles._app}>
        <div className="_header">
          <h1>Game schedule</h1>
          <hr></hr> 
        </div>
        <div className={styles._body}>
          <WeekPicker handleWeekChange={this.handleWeekChange} />
          <hr></hr>
          <Match data={data} />
        </div>
      </div>
    )
  }
}

export default App;
