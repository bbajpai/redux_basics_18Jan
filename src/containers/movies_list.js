import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../actions'

class MoviesList extends Component{

    componentWillMount(){
        this.props.moviesList();  /// Object containing acttion type and payload >>> state of curent component
    }

    renderList =(movies)=>{
        if(movies){
            return movies.map((movies)=>{
                return(
                    <div>{movies.name}</div>
                )
            })
        }
       
    }
    render(){
        return(
            <div>{this.renderList(this.props.movies)}</div>
        )
    }
}

function mapStateToProps(state){
    console.log('Inside map state to props',state.movies);
    return{
     movies:state.movies 
    }
}

export default connect(mapStateToProps, action)(MoviesList);
