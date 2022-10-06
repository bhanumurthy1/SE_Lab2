import { Component } from "react";
import profilePic from "../Images/MyProfile.png";
import "./Home.css";

let defaultName = "Bhanu Pravallika Pothuru";
let defaultDescription =
  "Hello All!!, This is Bhanu Pravallika Pothuru. This is a sample application where you can edit your name along with the description as part of the User Profile. You can also integrate the third party API and display the content over it. Lastly, you can also do the addition of 2 numbers and can get the display dynamically";

class Home extends Component {
  state = { userName: defaultName, userDescription: defaultDescription };

  onClickNameChange = (event) => {
    let newName = prompt("Enter your Name");
    if (newName) {
      this.setState({ userName: newName });
    }
  };

  onClickDescriptionChange = (event) => {
    let newDescription = prompt("About Yourself");
    if (newDescription) {
      this.setState({ userDescription: newDescription });
    }
  };

  render() {
    const { userName, userDescription } = this.state;
    const myStyle={
      backgroundImage: 
"url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
      height:'100vh',
      marginTop:'-70px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };
    return (
      <div className="main-container p-4 ">
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
              <h1 className="main-heading">{userName}</h1>
              <button className="edit-button " onClick={this.onClickNameChange}>
                Edit
              </button>
            </div>
            <p className="description">
              {userDescription}
              <span>
                <button
                  className="edit-button button2"
                  onClick={this.onClickDescriptionChange}
                >
                  Edit
                </button>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
