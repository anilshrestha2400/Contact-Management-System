import React from "react";

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isShowing:false,
            isEdit:false,
            name:this.props.contact.name,
            phone:this.props.contact.phone,
            email:this.props.contact.email,
            error:{
                
            }
        };
    }
    handleShowHide=()=>{
        this.setState({isShowing: !this.state.isShowing});
    };
    handleDelete=()=>{
        this.props.delete(this.props.contact.id);
    };
    handleEdit=()=>{
        this.setState({isEdit:true})
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
        let editedData={
            name,email,phone,id:this.props.contact.id
        }
        this.props.edit(editedData);
        this.setState({error:{},isEdit:false});

    };
    handleChange= e =>{
        this.setState({[e.target.name]:e.target.value})
    };
    render() {
        let cls=this.state.isShowing
            ?"fas fa-sort-up me-3"
            :"fas fa-sort-down me-3";
        const {error}=this.state;
        if(this.state.isEdit){
        return(
            <div className="card w-50 mx-auto mt-5">
                    <div className="card-header"
                     style={{
                        backgroundColor:"red", 
                        color:"white", 
                        fontWeight:"bold"
                        }}
                    >
                        <h1>Edit Contact Form</h1>
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
                            <button type="submit" className="btn btn-danger btn-block">Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
        );
    }else{
        return (
            <div>
                <div className="card w-50 mt-5 mx-auto">
                    <div 
                    className="card-header" 
                    style={{
                        backgroundColor:"green", 
                        color:"white", 
                        fontWeight:"bold"
                        }}
                    >
                    <h1>
                        <i className={cls} onClick={this.handleShowHide}></i>
                        {this.props.contact.name}
                        <div className="float-end">
                            <i className="fa-solid fa-pen-to-square me-3"
                            onClick={this.handleEdit}></i>
                            <i className="fa-solid fa-trash" 
                            onClick={this.handleDelete}></i>
                        </div>
                    </h1>
                    </div>
                    {this.state.isShowing?(
                        <div className="card-body">
                        <ul className="lst-group">
                            <h5>Email:</h5>
                            <li className="list-group-item">{this.props.contact.email}</li>
                            <h5>Phone:</h5>
                            <li className="list-group-item">{this.props.contact.phone}</li>
                        </ul>
                        </div>
                    ):null}                  
                </div>
            </div>
        );

    }
        
    }
}
export default Contact;