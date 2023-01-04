import { Component } from "react";

class Main extends Component{
    
    render(){
        return (
            <div className="Main">
                <h3>Main</h3>
                <div>{this.props.children}</div>
            </div>
            
        )
    }
}

export default Main;