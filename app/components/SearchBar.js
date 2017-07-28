import React from 'react';
import axios from 'axios';
import {fetchAPI} from '../utils/api.js';

class SearchBar extends React.Component {

  render() {
    return (
      <div className = "search-box">
      <p className = "title">Your SoundCloud Music Player</p>
       <form className = "form-inline my-2 my-lg-0" onSubmit = {this.props.handleSubmit}>
       <input className ="form-control mr-sm-2" type="text" placeholder="Search SoundCloud..." value = {this.props.state.value} onChange={this.props.handleChange}/>
       <button className="btn btn-success" type="submit"><i className="fa fa-music"></i><i className="fa fa-music"></i><i className="fa fa-music"></i></button>
       </form>
       </div>
    )
  }
}

module.exports = SearchBar

