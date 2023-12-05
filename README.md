##Redux with redux-toolkit

- install redux-toolkit
    run `npm i @reduxjs/toolkit`
- Creat store/index.js
    import { configureStore} from '@reduxjs/toolkit';
    import counterReducer from './counter';
    import authReducer from './auth'
    const store = configureStore({
      reducer: {counter : counterReducer, auth: authReducer}   // will automatically merge to one reducer
  });
  export default store;
- Create reducers. For example, auth.js
    import { createSlice } from '@reduxjs/toolkit';

    const initialAuthState = {
        isAuthenticated : false,
    }
    const authSlice = createSlice( {
     name : 'authentication',
     initialState : initialAuthState,
        reducers : {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
    });
    export const authActions = authSlice.actions;
    export default authSlice.reducer;

- At component we need the data:
  import { useSelector, useDispatch } from 'react-redux';
  import {authActions} from '../store/auth';

  const dispatch = useDispatch();
    - to dispatch action - dispatch(authActions.login(payload))
    - to   get data fron dedux -  const counter = useSelector(state => state.counter.counter);
