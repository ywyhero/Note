import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_NOTE, ACTIVE_NOTE, CHANGE_INDEX, REMOVE_NOTE, FAVORITE_NOTE, FILTER_NOTE } from './types'
Vue.use(Vuex)

const state = {
    notes: [],
    activeNote: {},
    index: 0
}

const getters = {
    getIndex: state => state.index,
    getNotes: state => state.notes,
    getActiveNote: state => state.activeNote,
}

const mutations = {
    ADD_NOTE (state, v) {
        state.notes.push(v);
    },
    ACTIVE_NOTE (state, note) {
        state.activeNote = note
    },
    EDITE_NOTE(state, v){
        state.activeNote.text = v
    },
    CHANGE_INDEX(state, v) {
        state.index = v
    },
    REMOVE_NOTE(state, index){
        state.note = state.notes.splice(index, 1)
    },
    FAVORITE_NOTE(state){
        state.activeNote.favorite = !state.activeNote.favorite
    },
    // FILTER_NOTE(state, type){
    //     if(type === 'all'){
    //         state.filterNotes = state.notes
    //     } else {
    //         let result = []
    //         for(let n of state.notes){
    //             if(n.favorite){
    //                 result.push(n)
    //             }
    //         }
    //         state.filterNotes = result
    //         console.log(state.notes)
    //     }
    // }


}

const actions = {
    addNote ({ commit }, index) {
        const note = {
            text: "NEW NOTE",
            favorite: false
        }
        commit('ADD_NOTE', note)
        actions.changeIndex({commit}, index)
    },
    activeNote ({ commit }, note) {
        commit('ACTIVE_NOTE', note)
    },
    editeNote({ commit }, text) {
        commit('EDITE_NOTE', text)
    },
    changeIndex({commit}, index) {
        commit('CHANGE_INDEX', index)
    },
    removeNote({ commit }){
        commit('REMOVE_NOTE', state.index)
        if(state.notes.length - 1 < state.index){
            actions.changeIndex({commit}, 0);
        }
    },
    favoriteNote({ commit }){
        commit('FAVORITE_NOTE')
    },
    // filterNote({commit}, type){
    //     commit('FILTER_NOTE', type)
    // }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})