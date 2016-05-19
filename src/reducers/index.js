import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

// it means: import a reducer from redux-form and put into a variable formReducer
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
