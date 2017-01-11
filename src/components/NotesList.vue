<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes | coligo</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Notes button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" @click="show = 'all'" :class="{active: this.show === 'all'}">All Notes</button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" @click="show = 'favorite'" :class="{active: this.show === 'favorite'}">Favorites</button>
        </div>
      </div>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a class="list-group-item" :class="{active: $store.state.activeNote === note}" href="#" v-for="(note, index) in notes" @click="setActiveNote(note, index)">
          <h4 class="list-group-item-heading">{{note.text.trim().substr(0, 10)}}</h4>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        show: 'all'
      }
    },
    computed: {
      notes () {
        if (this.show === 'all') {
          return this.$store.state.notes
        } else if (this.show === 'favorite') {
          return this.$store.state.notes.filter(note => note.favorite)
        }
      }
    },
    methods: {
      setActiveNote (note, $index) {
        this.$store.dispatch('setActiveNote', note)
        this.$store.state.index = $index
      }
    }
  }
</script>
