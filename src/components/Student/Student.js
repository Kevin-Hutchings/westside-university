import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentInfo: {},
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then(({data}) => {
      this.setState({ studentInfo: data })
    })
    .catch((e) => console.log(e))
  }

  render() {
    const { studentInfo } = this.state;

    return (
      <div className="box">
        <h1> Student: </h1>
        <h1> {studentInfo.first_name} {studentInfo.last_name} </h1>
        <h3> Grade: {studentInfo.grade} </h3>
        <h3> Email: {studentInfo.email} </h3>
        <button className='btn'>
          <Link to={`/classlist/${studentInfo.class}`}> Back to Class List </Link>
        </button>
      </div>
    )
  }
}