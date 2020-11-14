import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board extends React.Component {
  renderSqaure(i) {
    return <Square value={i} />;
  }
}

class Square
