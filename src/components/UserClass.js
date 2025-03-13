import React from "react";
import UserContext from "./../utils/UserContext";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
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
            <h2 className = "mx-4 my-2 text-2xl font-semibold">Author Name - {name}</h2>
            <h3 className = "mx-4 my-2 text-2xl font-semibold">University- {company}</h3>
            <h3 className = "mx-4 my-2 text-2xl font-semibold">Login ID - {login}</h3>
            <UserContext.Consumer>
                { (data)=>{
                    return <h3 className = "mx-4 my-2 text-2xl font-semibold">UserName:{data.loggedInUser}</h3>
                } }
            </UserContext.Consumer>
        </div> 
    }
}

export default UserClass;