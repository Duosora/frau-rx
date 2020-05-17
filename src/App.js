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
	Window.alert('Mounted successfully');
    gapi.load('client', this.initClient);
  };
  
  initClient = () => {
	Window.alert('Loading Google Spreadsheet API...');
	Window.alert('API key: '+config.apiKey);
	Window.alert('Discovery docs: '+config.discoveryDocs);
	Window.alert('Client ID: '+config.clientId);
	
	  
    gapi.client.init({
      apiKey: config.apiKey,
      discoveryDocs: config.discoveryDocs,
      clientId: config.clientId,
      scope: "https://www.googleapis.com/auth/spreadsheets.readonly"
    }).then(() => {
		Window.alert('Loaded successfully');
		
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
