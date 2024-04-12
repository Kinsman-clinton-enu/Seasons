import React from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import Loader from "./components/Loader";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }

  renderContent(){
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    else if(this.state.lat && !this.state.errorMessage){
      return <SeasonDisplay lat={this.state.lat}/> 
    }
    else{
      return <Loader message="Please accept location request" />
    }
  }

  render(){
    return(
      <div style={{border: "4px solid red"}}>{this.renderContent()}</div>
    )
  }
}
export default App;
