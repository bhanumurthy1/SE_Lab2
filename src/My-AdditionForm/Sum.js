import React from 'react';

export class Sum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: null,
            secondNumber: null
        };
    }
    //Function to be called when user makes a change
    myChangeHandler = (event) => {
        debugger;
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val }); //nam becomes a computed property.
        // so it will not set "nam" instead will see the value of nam then set stuff,
    }
    // To be called after user clicks on submit.
    mySubmitHandler = (event) => {

        event.preventDefault(); // prevent default behaviour
        //Constructing URL to send to the server.
        const url = `http://ec2-54-165-150-107.compute-1.amazonaws.com:9000/add/${this.state.firstNumber}/and/${this.state.secondNumber}`
        fetch(url)
            .then((result) => result.json())
            .then(result => {
                //After the request finished, update the state.
                //NOTE: You do not care where or how to display the result.
                // As HOW to display is the job of the view.
                // You just update the state and let React take it on from there.
                debugger;
                this.setState({ queryResult: result.Addition })
            });
    }

    render() {
        return (
           
            <div style={{
                backgroundColor: 'lavender',
                width: '1500px',
                height: '10000px'
              }}>
                <div className="row"><div className="col">
                    <form onSubmit={this.mySubmitHandler}>
                        <div className="form-group">
                            <br></br>
                            <center><h4><label htmlFor="firstNumber">Input Value 1:</label>&nbsp;&nbsp;&nbsp;
                            <input
                                type="number"
                                name="firstNumber"
                                id="firstNumber"
                                className="form-control"
                                onChange={this.myChangeHandler} /></h4></center>
                        </div>
                        <div className="form-group">
                           <center><h4><label htmlFor="secondNumber">Input Value 2:</label> &nbsp;&nbsp;&nbsp;
                            <input
                                type="number"
                                name="secondNumber"
                                id="secondNumber"
                                className="form-control"
                                onChange={this.myChangeHandler} /></h4></center> 
                        </div>
                        <br></br>
                        <center><button type="submit" className="btn btn-primary"><bold>Sum</bold></button></center>
                       
                    </form>
                </div>
                </div>

                <div className="row">
                    <div className="col">
                        <center><h3>Your Addition Result (from server) is: {this.state.queryResult} </h3></center>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        {/*Not the best way to do it, but works for small compute operations*/}
                        <br></br>
                        <center><h3>The Addition of those 2 Numbers is: {Number(this.state.firstNumber) + Number(this.state.secondNumber)} </h3></center>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Sum;
