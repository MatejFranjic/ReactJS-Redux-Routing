import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

//Whenever user is on this path, show this component
export default(
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
		<Route path="posts/new" component={ PostsNew } />
		<Route path="posts/:id" component={ PostsShow } />
	</Route>
);

/*Difference between Route and IndexRoute
path="/" -> it will show content of IndexRoute
any other path we specified -> it will show us the component we specified
*/

