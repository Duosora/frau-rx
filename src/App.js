import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';
import './App.css';
import config from './utils/config';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gasp: null,
      strings: null
    }
  }
  componentDidMount() {

  };
  
  initClient = () => {
	  console.log('inits');
  }
  render() {
    return <div className="App">
        <Tabs>
          <TabList>
            <Tab>GASP</Tab>
          </TabList>
          <TabPanel>

          </TabPanel>
        </Tabs>
      </div>;
  }
}

export default App;
