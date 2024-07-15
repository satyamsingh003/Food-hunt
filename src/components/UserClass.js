import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      userInfo: {},
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/agarwalmohak6");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    return (
      <div className="user-card">
        {/* <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
        <h2>{this.props.name}</h2>
        <h3>Location: Noida</h3>
        <h4>Contact: agarwalmohak6@gmail.com</h4> */}
        <img src={this.state.userInfo.avatar_url} alt="Mohak Image" />
        <h2>Name: {this.state.userInfo.name}</h2>
        <p>About: {this.state.userInfo.bio}</p>
        <h3>Company: {this.state.userInfo.company}</h3>
        <h3>Location: {this.state.userInfo.location}</h3>
      </div>
    );
  }
}

export default UserClass;
