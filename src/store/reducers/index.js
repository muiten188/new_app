//authen
import loginReducer from "../../authen/reducers/login_reducer";
//app
import searchReducer from "../../store/reducers/containers/search_reducer";
import app_Reducer from "../../store/reducers/app_reducer";
import * as types from "../../store/constants/action_types";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
// export default combineReducers({
//   navigationReducer,
//   authenNavigationReducer,
//   loginReducer,
//   searchReducer,
//   userInfoReducer,
//   billListReducer,
//   billDetailReducer,
//   historyReducer,
//   form: formReducer
// });

const appReducer = combineReducers({
  loginReducer,
  searchReducer,
  app_Reducer,
  form: formReducer
});

const rootReducer = (state, action) => {
  if (action.type === types.LOGGED_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
 export default rootReducer;