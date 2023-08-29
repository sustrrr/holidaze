import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "../../layout/Button";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Stored extends Component {
  userData;
  constructor(props) {
    super(props);
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);

    const s = JSON.parse(localStorage.getItem("user"));
    console.log(s);

    this.onSubmit = this.onSubmit.bind(this, "add");

    this.state = {
      select: "",
      startDate: new Date(),
      endDate: new Date(),
      countA: s.countA,
      countK: s.countK,
      countRoom: s.countRoom,
    };
  }

  incrementA = (e) => {
    e.preventDefault();
    this.setState({ countA: this.state.countA + 1 });
  };
  decrementA = (e) => {
    e.preventDefault();
    this.setState({ countA: this.state.countA - 1 });
  };

  incrementK = (e) => {
    e.preventDefault();
    this.setState({ countK: this.state.countK + 1 });
  };
  decrementK = (e) => {
    e.preventDefault();
    this.setState({ countK: this.state.countK - 1 });
  };

  incrementRoom = (e) => {
    e.preventDefault();
    this.setState({ countRoom: this.state.countRoom + 1 });
  };
  decrementRoom = (e) => {
    e.preventDefault();
    this.setState({ countRoom: this.state.countRoom - 1 });
  };

  ////
  onChangeSelect(e) {
    this.setState({ select: e.target.value });
  }

  onChangeSelect(e) {
    this.setState({ select: e.target.value });
  }

  setStartDate(date) {
    this.setState({
      startDate: date,
    });
  }

  setEndDate(enddate) {
    this.setState({
      endDate: enddate,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      select: "",
      date: "",
      enddate: "",
    });
  }
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("user"));
    if (localStorage.getItem("user")) {
      this.setState({
        select: this.userData.select,
        date: this.userData.date,
        enddate: this.userData.enddate,
      });
    } else {
      this.setState({
        select: "",
        date: "",
        enddate: "",
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState));
  }

  render() {
    var path = this.state.select;
    return (
      <div className="ghghgh">
        <form onSubmit={this.onSubmit}>
          <div className="datepickers">
            <div>
              <p>From</p>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.setStartDate}
                name="startDate"
                dateFormat="MM/dd/yyyy"
              />
            </div>
            <div>
              <p>To</p>
              <DatePicker
                selected={this.state.endDate}
                onChange={this.setEndDate}
                name="endDate"
                dateFormat="MM/dd/yyyy"
              />
            </div>
          </div>

          <div className="incr">
            <div className="incrflex">
              <div>
                <p>{this.state.countA} adults</p>
                <button onClick={this.incrementA}> + </button>
                <button onClick={this.decrementA}> - </button>
              </div>
              <div>
                <p>{this.state.countK} child</p>
                <button onClick={this.incrementK}> + </button>
                <button onClick={this.decrementK}> - </button>
              </div>
              <div>
                <p>{this.state.countRoom} rooms</p>
                <button onClick={this.incrementRoom}> + </button>
                <button onClick={this.decrementRoom}> - </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
