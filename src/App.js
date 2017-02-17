import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.successCallback = this.successCallback.bind(this)
    this.errorCallback = this.errorCallback.bind(this)
  }
initGeolocation() {
  if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.successCallback, this.errorCallback,{timeout:10000});
  }
  else {
    console.log('Geolocation is not supported');
        }
}
 
errorCallback() {}
 
  successCallback(position) {
    var mapUrl = "http://maps.google.com/maps/api/staticmap?center=";
    mapUrl = mapUrl + position.coords.latitude + ',' + position.coords.longitude;
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    mapUrl = mapUrl + '&zoom=15&size=512x512&maptype=roadmap&sensor=false';
    var imgElement = document.getElementById("static-map");
    imgElement.src = mapUrl;
    var x = position.coords.latitude;
    document.getElementById("demo1").innerHTML = x;
    var x = position.coords.latitude;
    document.getElementById("demo2").innerHTML = x;
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Know Your Location</h2>
        </div>
        <p className="App-intro">
         where am I?
        </p>
        <button id="butLocation"  class="headerButton"  
        onClick={this.initGeolocation}> Location</button>
        <div >
        <img id="static-map" src="placeholder.png"/> 
      </div>
      <span> latitude:  </span> <span id="demo1"></span> 
      <span> longitude:  </span> <span id="demo2"></span>
      </div>
    );
  } 
}

export default App;
