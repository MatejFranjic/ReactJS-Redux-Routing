import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';


class PostsNew extends Component{

	static contextTypes= {
		router:PropTypes.object
	};

	onSubmit(props){
		this.props.createPost(props)
			.then(() => {
				//blog post has been created, navigate the user to the index. We navigate by calling:
				this.context.router.push('/');
				console.log('This is this.context',this.context);
			});
	}

	render(){
		//console.log('This is this.contextTypes ',this.contextTypes);
		//console.log('This is this.props ',this.props);
		const { fields: { title, categories, content } ,handleSubmit } = this.props;
		//console.log({handleSubmit}); //reduxForms function we want to call whenever the user presses the enter or submit key
		//console.log('This is title part of the object',title);
		//console.log('ovo je on change event handler',title.onChange);


		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create a new post</h3>

				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`} >
					<label htmlFor="title">Title</label>
					<input id="title" type="text" className="form-control" { ...title }/>
					<div className="text-help">
						{ title.touched ? title.error : '' }
					</div>
				</div>

				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label htmlFor="categories">Categories</label>
					<input id="categories" type="text" className="form-control" { ...categories }/>
					<div className="text-help">
						{ categories.touched ? categories.error : '' }
					</div>
				</div>

				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label htmlFor="content">Content</label>
					<textarea id="content" className="form-control" { ...content }/>
					<div className="text-help">
						{ content.touched ? content.error : '' }
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link path="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function validate(values){
	const errors = {};

	if(!values.title){
		errors.title = 'Enter a title';
	} 
	if(!values.categories){
		errors.categories = 'Enter categories';
	} 
	if(!values.content){
		errors.content = 'Enter content into your post';
	}

	return errors;
}

//connect and reduxForm are almost identical, reduxForm has 1 argument more
//reduxForm: (form config, mapStateToProps, mapDispatchToProps)

export default reduxForm({
	//this component doesn't has to be the same as value in second parenthesis
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostsNew);