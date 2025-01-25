import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count: 1,
            personInfo: {}
        }
        console.log("constructor");
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Pranai321");
        const json = await data.json();
        console.log(json);
        this.setState({
            personInfo: json
        })
    }

    //this function is ran after the state variables are updated
    componentDidUpdate(){
        console.log("component is updated");
    }
    //this function is ran after the component unmounted from the UI
    componentWillUnmount(){
        console.log("compenent is disappeared from the UI")
    }

    render(){

        const {name,company,login} = this.state.personInfo;
        return<div className = "person">
            <button onClick = {()=>{
                this.setState({
                    count:this.state.count+1
                });
            }}>Count:{this.state.count}</button>
            <h2>{name}</h2>
            <h3>{company}</h3>
            <h3>{login}</h3>
        </div> 
    }
}

export default UserClass;