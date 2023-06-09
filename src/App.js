import React, { useState } from 'react';
import DisplayEntries from './Components/Display Entries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';
import ".//App.css";
import "./index.css";
import "./Components/Search/search";

function App() {

  const[entries, setEntries] = useState([{weight: 1245, date: '11-23-2021', usd: 987.12}, {weight: 1736, date: '11-24-2021', usd: 1099.22}])
  
  function addNewEntry(entry){

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }



  return (
   <div className = 'container-fluid'>
      <div className= 'row'>
        <h3 style={{margin:"1em"}}>Inventory<small className='text-muted' >Tracker</small></h3>
        <div clasName = 'col-md-6'>
          <div className = 'border-box'>
            <DisplayEntries parentEntries={entries} />
            <AddEntryForm addNewEntryProperty={addNewEntry}/>
        </div>
      </div>
        <div clasName = 'col-md-6'>
          <div className='border-box'>
            <EntriesChartTracker parentEntries= {entries}/>
          </div>
        </div>      
      </div>
    </div>
  );
}

export default App;
