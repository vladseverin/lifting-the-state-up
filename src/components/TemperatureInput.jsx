import React, { Component } from 'react';

const scaleNames = {
  c: "Цельсиях",
  f: "Фарингейтах"
};

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const { scale, temperature } = this.props;
    return (
      <fieldset>
        <legend>Введите темпиратуру в {scaleNames[scale]}:</legend>
        <input 
          value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
