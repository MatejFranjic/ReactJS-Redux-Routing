import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component{

	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount(){
		this.props.fetchPost(this.props.params.id);
	}

	onDeleteClick(){
		this.props.deletePost(this.props.params.id)
		.then( () => {
			this.context.router.push('/');
		});
	}

	render(){
		console.log(this.props.post);
		//This will say to user: Hey I haven't loaded up yet, wait a second
		if(!this.props.post){
			return (
				<div>
					Loading...
				</div>
			);
		}

		return (
			<div>
				<Link to="/" className="btn btn-primary">Back to list of posts</Link>
				<h3>{ this.props.post.title }</h3>
				<h6>Categories: { this.props.post.categories }</h6>
				<p>{ this.props.post.content }</p>
				<button className="btn btn-danger" onClick={ this.onDeleteClick.bind(this) }>
					Delete post
				</button>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { post: state.posts.post };
}

//we made it here on shortcut way
export default connect(mapStateToProps, {fetchPost, deletePost} )(PostsShow);