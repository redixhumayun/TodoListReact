import React from 'react';
import Link from '../components/Link.js';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
	return {
		children: ownProps.children, 
		visibilityFilter: state.visibilityFilter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: (e) => {
			e.preventDefault();
			dispatch({
				type: 'SET_VISIBILITY_FILTER', 
				filter: ownProps.filter
			})
		}
	}
}

const FilterLink = connect(
	mapStateToProps, 
	mapDispatchToProps
)(Link)

export default FilterLink;