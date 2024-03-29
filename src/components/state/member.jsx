import React, { Component } from "react";
class Member extends Component {
  state = {
    Person: [
      {
        id: 1,
        image: "image/bro-3.jpg",
        memberName: "Saing Sab",
        memberPosition: "Co-Founder"
      },

      {
        id: 2,
        image: "image/bro-2.jpg",
        memberName: "Thul Rithy",
        memberPosition: "PR and Partnership"
      },

      {
        id: 3,
        image: "image/bro-4.jpg",
        memberName: "San Vuthy",
        memberPosition: "Full Stack Web Developer"
      },
      {
        id: 4,
        image:
          "https://pbs.twimg.com/profile_images/1119201258206683136/b0-pGUZW_400x400.png",
        memberName: "Ma veasna",
        memberPosition: "Front End Developer"
      },
      {
        id: 5,
        image: "./image/sovanden.jpg",
        memberName: "Sarim Sovanden",
        memberPosition: "Front End Developer"
      }
    ]
  };
  render() {
    return (
      <div className="background-under-header-1">
        <div className="ui container member-container">
          <h1 className="memberTitle">Our People</h1>
          <div className="ui grid">
            <div className="doubling three column row">
              {this.state.Person.map(Persons => (
                <div className="column member-column-style" key={Persons.id}>
                  <center>
                    <img
                      className="ui small circular image image-style"
                      src={Persons.image}
                      alt={Persons.memberName}
                    />
                    <h3 style={{ color: "#fff" }} className="memberName">
                      {Persons.memberName}
                    </h3>
                    <p className="memberPosition">{Persons.memberPosition}</p>
                  </center>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Member;
