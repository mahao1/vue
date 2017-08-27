import * as types from './types';

export default {
  showHead: ({commit,state})=>{
    commit(types.SHOW_HEAD);
  },
  hideHead: ({commit,state})=>{
    commit(types.HIDE_HEAD);
  },
  showFoot: ({commit,state})=>{
    commit(types.SHOW_FOOT);
  },
  hideFoot: ({commit,state})=>{
    commit(types.HIDE_FOOT);
  }
}