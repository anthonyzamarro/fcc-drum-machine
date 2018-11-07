import { combineReducers } from 'redux';

import drumData from './drumsDisplayReducer';
import drumz from './drumsReducer';

const rootReducer = combineReducers({
	drumData,
	drumz
});

export default rootReducer;