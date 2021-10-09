import React from "react";

class Navbar extends React.Component{
    render(){
        console.log(this.props);
        return(
            <nav className="navbar navbar-expand-lg navbar-light b" 
            style={{backgroundColor:"black"}}>
            <div className="container-fluid">
              <a className="navbar-brand mx-auto" href="#"
              style={{color: "white"}} >{this.props.title}</a>
            </div>
          </nav>
        );
    }
}
export default Navbar;