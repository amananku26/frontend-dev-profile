import React from "react";
import "./styles.css";
import Pin from "./Components/Pin";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      list: [],
      error:"",
      boxLength: 4
    };
  }

  handleAdd = () => {
    const { list, value } = this.state;
    if(value.length === 16) {
      this.setState({
        list: [...list, value],
      });
    }   else {
           this.setState({error:"OOP ! Something Went Wrong"})
      }

  };

  componentDidUpdate(){
    setTimeout(() => this.setState({error:''}), 2000);
  }


  handleDelete = (index) => {
    console.log(index);
    var array = this.state.list
    array.splice(index,1)
    this.setState({
      list:array
    })
    
  };

  render() {
    const { list , error} = this.state;
    return (
      <div className="App">
        <div className="Cards1">
       
            <h1 style={{ color: "white" }}>Enter Card Number</h1>
      
            <Pin
              className="tup"
              length={4}
              onChange={(val) => 
                  this.setState({ value: val }) 
              }
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  return (this.handleAdd)
                }
              }} />
       
           { error && <div style={{color:"red"}}>{error}</div> }
          <div>
            {this.state.value && (
              <button onClick={this.handleAdd} className="AddBtn">
                <img
                  height="25px"
                  src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/add-circle-blue-512.png"
                  alt="add"/>
              </button>
            )}
          </div>
        </div>
        <div className="Cards2">
          {list &&
            list.map((item, index) => {
              var parts = item.match(/.{1,4}/g);
              var name = parts.join("-");
              return (
                <div key={index}>
                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/b9658c33227849.Y3JvcCw0ODc5LDM4MTksNDYxLDA.png" height="45px" alt="cardimg"/>
                    <span className="nametxt">{name}</span>
                      <button
                        className="AddBtn"
                        onClick={() => this.handleDelete(index)}
                      >
                        <img
                          height="25px"
                          src="https://image.flaticon.com/icons/png/512/61/61848.png"
                          alt="delete"
                        />
                      </button>
                  
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
