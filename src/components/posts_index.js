import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// We want to call an action creator, that's why we imported a function
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component{

	componentWillMount(){
		console.log('This will be a good time to call an action creator to fetch posts');
		console.log(this.props.fetchPosts());
		this.props.fetchPosts();
	}

	renderPosts(){
		return this.props.posts.map( (post) =>{
			return(
				<Link to={ "posts/" + post.id}>
					<li className="list-group-item" key={ post.id }>
						<span className="pull-xs-right"> <strong> { post.categories } </strong> </span>
						<strong> { post.title } </strong>
					</li>
				</Link>
			);
		});
	}

	render(){
		return(
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						Add a post
					</Link>
				</div>
				<h3>List of blog posts:</h3>
				<ul className="list-group">
					{ this.renderPosts() }
				</ul>
			</div>
		);
	}

}

function mapDispatchToProps(dispatch){
	return bindActionCreators( { fetchPosts }, dispatch);
}

/*A LITTLE SHORTCUT:
WE CAN DELETE FUNCTION mapDispatchToProps and add this line of code instead of this one:
export default connect(null, mapDispatchToProps)(PostsIndex);
ADD THIS SHORTCUT

export default connect(null, { fetchPosts: fetchPosts } )(PostsIndex);
AND IT CAN GO LIKE THIS DUE TO ES6 SYNTAX
export default connect(null, { fetchPosts } )(PostsIndex);

*/
function mapStateToProps(state){
	return { posts: state.posts.all };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);