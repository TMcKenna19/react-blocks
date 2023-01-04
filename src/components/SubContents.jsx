import { Component } from "react";

class SubContents extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="Sub-Contents" style={{
                display: "flex-row",
                alignContent: "space-around",
                backgroundColor: "#ffd996",
                height: "30vh",
                width: "15vw",
                border: "3px solid #000 !important"
               
            }}>
            <h3>SubContents</h3>
            </div>
        )
    }
}

export default SubContents;