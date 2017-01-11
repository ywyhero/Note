/**
 * Created by Administrator on 2017/1/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
Vue.use(Vuex)
const state = {
  notes: [],
  activeNote: {},
  index: 0
}

const mutations = {
  [types.ADD_NOTE] (state) {
    const newNote = {
      text: 'New Note',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  [types.TOGGLE_FAVORITE] (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },
  [types.DELETE_NOTE] (state) {
    state.notes.splice(state.index, 1)
    state.activeNote = state.notes[state.notes.length - 1]
  },
  [types.EDITOR_NOTE] (state, text) {
    state.activeNote.text = text
  },
  [types.SET_ACTIVE_NOTE] (state, note) {
    state.activeNote = note
  }
}
const actions = {
  addNote: ({commit}) => {
    commit(types.ADD_NOTE)
  },
  deleteNote: ({commit}) => {
    commit(types.DELETE_NOTE)
  },
  toggleFavorite: ({commit}) => {
    commit(types.TOGGLE_FAVORITE)
  },
  setActiveNote: ({commit}, note) => {
    commit(types.SET_ACTIVE_NOTE, note)
  },
  editorNote: ({commit}, e) => {
    commit(types.EDITOR_NOTE, e.target.value)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})

