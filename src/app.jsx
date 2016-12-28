import React, { Component, PropTypes } from 'react';
import ReactDOM, {render} from 'react-dom';
import {provider} from 'react-redux';
import route from './router/router';

render(
    <Provider>{route}</Provider>,
    document.body.appendChild(document.createElement('div'))
)