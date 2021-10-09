import React from "react";

class Form extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            phone:"",
            email:"",
            error:{
                
            }
        };
    }
    handleChange= e =>{
        this.setState({[e.target.name]:e.target.value})
    };
    handleSubmit= e =>{
        e.preventDefault();
        const {name,phone,email}=this.state
        if(name===""){
            return this.setState({error:{name:"please enter your name"}});
        }else if(email===""){
            return this.setState({error:{email:"please enter your email address"}});
        }else if(phone===""){
            return this.setState({error:{phone:"please enter your phone number"}});
        }
        this.props.formData(this.state);
        this.setState({error:{},name:"",email:"",phone:""})
    };
    render(){
        const {error}=this.state;
        return(
                <div className="card w-50 mx-auto mt-5">
                    <div className="card-header"
                     style={{
                        backgroundColor:"blue", 
                        color:"white", 
                        fontWeight:"bold"
                        }}
                    >
                        <h1>Contact Form</h1>
                    </div>
                    <div className="card-body">
                        <form action="" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" 
                                placeholder="Name"
                                onChange={this.handleChange}
                                value={this.state.name}
                                name="name"
                                className="form-control"/>
                                <span style={{color:"red"}} >{error.name}</span>
                            </div>
                            <br/>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" 
                                placeholder="Email"
                                onChange={this.handleChange}
                                value={this.state.email}
                                name="email"
                                className="form-control"/>
                                <span style={{color:"red"}}>{error.email}</span>
                            </div>
                            <br/>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="number" 
                                placeholder="Phone"
                                onChange={this.handleChange}
                                value={this.state.phone}
                                name="phone"
                                className="form-control"/>
                                <span style={{color:"red"}}>{error.phone}</span>
                            </div>
                            <br/>
                            <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
        );
    }
} 

export default Form;