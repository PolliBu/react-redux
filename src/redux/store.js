import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { balanceReduser } from './balanceSlice';
import { localeReduser } from './localeSlice';

// const initialState = {
//   balans: {
//     value: 50,
//   },
//   locale: {
//     lang: 'uk',
//     //   b: 2,
//   },
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'balance/deposit':
//       return {
//         ...state,
//         balans: {
//           // ...state.balans,
//           value: state.balans.value + action.payload,
//         },
//       };
//     case 'balance/withdraw':
//       return {
//         ...state,
//         balans: {
//           // ...state.balans,
//           value: state.balans.value - action.payload,
//         },
//       };
//     case 'locale/changeLang':
//       return {
//         ...state,
//         locale: {
//           // ...state.balans,
//           lang: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  balans: balanceReduser,
  locale: localeReduser,
});

export const store = createStore(rootReducer, devToolsEnhancer());
