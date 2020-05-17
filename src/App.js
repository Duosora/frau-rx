import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';
import './App.css';
import Gasp from './Gasp';
import config from './utils/config';
import { gapi } from 'gapi-script';

import { loadGasp, loadStrings } from './utils/sheet';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gasp: null,
      strings: null
    }
  }
  componentDidMount() {
	console.log('Mounted successfully');
    gapi.load('client', this.initClient);
  };
  
  initClient = () => {
	console.log('Loading Google Spreadsheet API...');
	console.log('API key: '+config.apiKey);
	console.log('Discovery docs: '+config.discoveryDocs);
	console.log('Client ID: '+config.clientId);
	
	  
    gapi.client.init({
      apiKey: config.apiKey,
      discoveryDocs: config.discoveryDocs,
      clientId: config.clientId,
      scope: "https://www.googleapis.com/auth/spreadsheets.readonly"
    }).then(() => {
		console.log('Loaded successfully');
		
      loadGasp(this.setGasp);
      loadStrings(this.setStrings);
    }, response => console.log(response));
  }

  setGasp = (data, error) => {
    console.log(error);
    if(error) {
      console.log(error);
    }
    else {
      this.setState({gasp: data});
    }
  };
  setStrings = (data, error) => {
    if(error) {
      console.log(error);
    }
    else {
      this.setState({strings: data});
    }
  };

  render() {
    return <div className="App">
        <Tabs>
          <TabList>
            <Tab>GASP</Tab>
          </TabList>
          <TabPanel>
            <Gasp sheet={this.state.gasp} strings={this.state.strings} />
          </TabPanel>
        </Tabs>
      </div>;
  }
}

export default App;
