import React from 'react';
import FilterLink from '../containers/FilterLink.js';

const Footer = () => {
	return (
		<p>
			<FilterLink filter='SHOW_ALL'>
				All
			</FilterLink>
			{'  '}
			<FilterLink filter='SHOW_COMPLETED'>
				Completed
			</FilterLink>
			{'  '}
			<FilterLink filter='SHOW_ACTIVE'>
				Active
			</FilterLink>
		</p>
	)
}

export default Footer;