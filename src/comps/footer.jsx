import React from 'react';
import FilterLink from './FilterLink';
import { VisibilityFilters } from '../actionTypes';

const Footer = () => (
  <div className="grid-x align-center grid-margin-y">
    <ul className="menu align-center">
      <li className="menu-text">Show: </li>
      <li><FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink></li>
      <li><FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink></li>
      <li><FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink></li>
    </ul>
  </div>
);

export default Footer;
