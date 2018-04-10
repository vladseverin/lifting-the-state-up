import React, { Component } from 'react';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Вода кипит</p>
  }
  return <p>Вода не кипит</p>
}

export default BoilingVerdict;
