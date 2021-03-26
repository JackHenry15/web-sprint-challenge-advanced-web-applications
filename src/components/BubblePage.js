import React, { useEffect, useState } from "react";
import axios from 'axios';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { render } from "@testing-library/react";

class BubblePage extends React.Component{
  // const [colorList, setColorList] = useState([]);
  state = {
    colorList: []
  }
  componentDidMount(){
    axios.get('http://localhost:5000/api/colors')
    .then(res=>{
      console.log(res.data);
      this.setState({
        colorList: res.data.data
      });
    })
    .catch(err=>{
      console.log(err);
    }); 
  }
  setColorList = (colorId) => {
    this.setState({
      colorList: (colorId)
    });
  }
  render() {
  return (
    <div className="container">
      <ColorList colors={this.state.colorList} updateColors={this.state.setColorList} />
      <Bubbles colors={this.state.colorList} />
    </div>
  );
  }
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
