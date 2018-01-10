<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes | coligo</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Notes button -->
        <div class="btn-group" role="group">
          <button type="button" @click="allClick" :class="{active: show === 'all'}" class="btn btn-default">All Notes</button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" @click="favoriteClick" :class="{active: show === 'favorite'}" class="btn btn-default">Favorites</button>
        </div>
      </div>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a class="list-group-item" href="#" :class="{active: activeNote == note}" @click="activeNoteClick($event, note)" :data-index="index" v-for="(note, index) in notes" :key="index">
          <h4 class="list-group-item-heading" :data-index="index">{{note.text.trim().substr(0, 10)}}</h4>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        show: 'all',
      }
    },
    computed:{
      ...mapGetters({
        activeNote: 'getActiveNote',
        dIndex: 'getIndex'
      }),
      notes(){
        if (this.show === 'all') {
          return this.$store.state.notes
        } else if (this.show === 'favorite') {
          return this.$store.state.notes.filter(note => note.favorite)
        }
      }
    },
    methods: {
      ...mapActions({
        getActiveNote: 'activeNote',
        changeIndex: 'changeIndex'
      }),
      activeNoteClick(e, note){
        let index = e.currentTarget.dataset.index;
        this.changeIndex(index)
        this.getActiveNote(note) 
      },
      allClick(){
        this.show = 'all'
      },
      favoriteClick(){
        this.show = 'favorite'
      }
    }
  }
</script>
