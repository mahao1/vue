import * as types from './types';

export default {
  [types.SHOW_HEAD]: (state)=>{
    state.blHead = true;
  },
  [types.HIDE_HEAD]: (state)=>{
    state.blHead = false;
  },
  [types.SHOW_FOOT]: (state)=>{
    state.blFoot = true;
  },
  [types.HIDE_FOOT]: (state)=>{
    state.blFoot = false;
  }
}
