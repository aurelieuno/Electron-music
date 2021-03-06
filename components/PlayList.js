import React from 'react';
import Autocomplete from 'react-autocomplete';

class PlayList extends React.Component {

  render() {

    return (
      <div>
        <p className="SongName">Current Playlist:</p>
        <Autocomplete
          inputProps={{title: "Title"}}
          value={this.props.state.value2}
          items={this.props.playlist}
          getItemValue={(item) => item.title}
          onChange={this.props.handleChange2}
          onSelect={this.props.handleSelect2}

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


