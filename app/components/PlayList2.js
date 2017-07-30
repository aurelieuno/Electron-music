import React from 'react';
import Autocomplete from 'react-autocomplete';

class PlayList extends React.Component {

  render() {

    return (
      <div className="search">
        <p className="SongName">Current Playlist:</p>
        <Autocomplete
          value={this.props.state.value}
          items={this.props.playlist}
          getItemValue={(item) => item.title}
          onChange={this.props.handleChange}
          onSelect={this.props.handleSelect}

          renderItem={(item, isHighlighted) =>
            <div
            style={{background: isHighlighted ? 'lightgray' : 'white'}}
            key = {item. title}
            >
              {item.title}
            </div>
          }
        />
        </div>
        )
  }
}

module.exports = PlayList


