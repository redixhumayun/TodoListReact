import React from 'react';

const Link = ({children, filter, visibilityFilter, onClick}) => {
	if(filter === visibilityFilter){
		return <span>{children}</span>
	}
	return(
		<a href='#' onClick={onClick}>{children}</a>
	)
}

export default Link;