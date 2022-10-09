import { Component } from "react";
import profilePic from "../Images/MyProfile.png";
import "./Home.css";

let defaultName = "Bhanu Pravallika Pothuru";
let defaultDescription =
  "Hello All!!, This is Bhanu Pravallika Pothuru. This is a sample application where you can edit your name along with the description as part of the User Profile. You can also integrate the third party API and display the content over it. Lastly, you can also do the addition of 2 numbers and can get the display dynamically";

class Home extends Component {
  

myChangeHandler = (event) => {
  debugger;
  let nam = event.target.name;
  let val = event.target.value;
  this.setState({ [nam]: val }); //nam becomes a computed property.
  // so it will not set "nam" instead will see the value of nam then set stuff,
}


  state = { userName: defaultName, userDescription: defaultDescription };

  onClickNameChange = (event) => {
    debugger;
    let newName = event.target.value;
    if (newName) {
      this.setState({ userName: newName });
    }
  };

  onClickDescriptionChange = (event) => {
    let newDescription =event.target.value;
    if (newDescription) {
      this.setState({ userDescription: newDescription });
    }
  };

  render() {
    const { userName, userDescription } = this.state;
    
    return (
      <div className="main-container p-4 " style={{
        backgroundColor: 'lavender',
        width: '1500px',
        height: '10000px'
      }}>

        <div className="my-container">
          <div>
            <img
              className="Profile-image"
              src={profilePic}
              alt="profileImage"
            />
          </div>
          <div className="data-container">
            <div className=" d-flex flex-row justify-content-start align-items-center">
            <h3 className="main-heading"><label htmlFor="secondNumber">Name: {userName}</label></h3>
            </div>
            <p className="description">
           <h4><label htmlFor="secondNumber">About Yourself: {userDescription}</label></h4>
            </p>
            <br></br>
            <h4><label htmlFor="secondNumber">Edit Your Name:  </label>
            <input
                                type="string"
                                name="username"
                                id="usernameid"
                                className="form-control"
                                onChange={this.onClickNameChange} /></h4>
                                <br></br>
            <h4><label htmlFor="secondNumber">Edit About Yourself:  </label>
            <input
                                type="string"
                                name="desc"
                                id="descid"
                                className="form-control"
                                onChange={this.onClickDescriptionChange} /></h4>

          </div>
        </div>
      </div>
      
    );
  }
}

export default Home;
