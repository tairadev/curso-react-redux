import { legacy_createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  numeros: function (state, action) {
    return {
      min: 7,
      max: 31
    };
  }
});

function storeConfig() {
  return legacy_createStore(reducers);
}

export default storeConfig;
