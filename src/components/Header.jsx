import { Component } from "react";

class Header extends Component{
    render(){
      return (
          <div className="Header" style={{
            backgroundColor: "#6aa84f",
            height: "15vh",
            width: "fill",
            padding: "20px",
            textAlign: "center",
            border: "3px soild #000",
          }}>
          <h3>Header</h3>
          </div>
      )  
    }
}

export default Header;