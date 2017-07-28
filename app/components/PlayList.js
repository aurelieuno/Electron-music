import React from 'react';
import Autocomplete from 'react-autocomplete';

class PlayList extends React.Component {

  render() {

    return (
      <div>
        <p className="SongName">Current Playlist:</p>
        <Autocomplete
          getItemValue={(item) => item.title}
          items={this.props.playlist}
          renderItem={(item, isHighlighted) =>
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.title}
            </div>
          }
          value={this.props.state.value2}
          onChange={this.props.handleChange2}
          onSelect={this.props.handleSubmit2}
        />

        </div>
        )
  }
}

module.exports = PlayList



