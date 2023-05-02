import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productReducer from '../ProductSlice'
import storage from 'redux-persist/lib/storage'
import ProductSlice from '../ProductSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({

  product:ProductSlice
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer:persistedReducer,
  
});

export const persistor = persistStore(store);


// export const store = configureStore({
//   reducer: {
//     product:productReducer,
//   },
// })
