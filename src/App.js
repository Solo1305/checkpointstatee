import React, { useState } from 'react';


class App extends React.Component {
  state = {
    Person: {
      fullName: "Mehdi Bourgou",
      bio: "no bio",
      imgSrc: 'Pic',
      profession: "Football"
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
  //state2 = { count: 0 };

  //componentDidMount() {
    //const intervalId = setInterval(() => {
     // this.setState(prevState => {
       // return {
        //  count: prevState.count + 1,
        //};
      //});
   // }, 1000);
 // }

  //componentWillUnmount(){
    //clearInterval(intervalId);
 // }

  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="Mehdi"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
        <h3>{this.state.count}</h3>
      </>
    );
  }
  
}
export default App;