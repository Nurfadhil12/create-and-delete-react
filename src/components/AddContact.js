import React from 'react';
import './AddContact.css';


class AddContact extends React.Component{
    state =
              {
                name: "",
                email: "",
              };
              add =(e) => {
                e.preventDefault();
                if (this.state.name === "" || this.state.email ===""){
                    alert("Sayang kamu belum ngisi tolong jangan bikin emosi yaa😘😘😘");
                    return;
                }
                this.props.addContactHandler (this.state);
                this.setState({name:"",email:""})
                console.log(this.state);
              }
    render(){
        return(
            
             
            <div>
                 {/* <h3>Menambahkan Data</h3> */}
                 <form onSubmit={this.add}>
                     <div>
                        <div>
                            <label> Namamu</label>
                        </div>
                        <div>
                            <input
                             type="text"
                             name="name"
                             placeholder="Nama kamu Sayang"
                             value={this.state.name}
                             onChange={(e) => this.setState({ name: e.target.value})}/>
                        </div>
                     </div>
                     <div>
                        <div>
                            <label>Komen</label>
                        </div>
                        <div>
                            {/* <input type="text"
                             name="email"
                             placeholder="Email Kamu Sayang"
                             value={this.state.email}
                             onChange={(e) => this.setState({ email: e.target.value})}/> */}
                             <textarea  type="text"
                             name="email"
                             placeholder="Ngomong apa aja terserah"
                             value={this.state.email}
                             onChange={(e) => this.setState({ email: e.target.value})}/>
                        </div>
                     </div>
                     <div>
                         <button>
                             Simpan
                         </button>
                     </div>
                 </form>
            </div>
        );
    };
};

export default AddContact;
//style={{marginTop: 4 + 'em'}}


// <div className="ui main" >
            //     <h2>Add Contact</h2>
            //     <form className="ui form">
            //         <div className="field">
            //             <label> Name</label>
            //             <input type="text" name="name" placeholder="Name"/>
            //         </div>
            //         <div className="field">
            //             <label> Email</label>
            //             <input type="text" name="name" placeholder="Email"/>
            //         </div>
            //         <button className="ui button blue">Add</button>
                    
            //     </form>
            // </div>