import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actionTypes';
import {Button} from './Button';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Button)

