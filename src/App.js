import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CountData from './reducers';
import TempCompnent from './TempCo';
import PresComponent from './PresCo';
import LineComponent from './LineCo';
import BarCo from './BarCo';
import logo from './logo.svg';
import './App.css';


  
  fetch("http://private-4945e-weather34.apiary-proxy.com/weather34/rain")
      .then((response)=> {
    response.json().then(function (data) {
        let data_bar = data[0].days.map((item) => {
          console.log(item);
            return item.amount;
        });
        store.dispatch({ type: 'newData', data_arr: data[0].days, data_bar })
    });
});


let store = createStore(CountData)

store.subscribe(() => {
}
)
export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <div><TempCompnent /></div>
                    <div><LineComponent /></div>
                    <div><PresComponent /></div>
                    <div><BarCo /></div>
                </div>
            </Provider>
        );
    }
}

 
