<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite" :class="{'starred': $store.state.activeNote.favorite}" class="glyphicon glyphicon-star"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>
<script>
  export default {
    methods: {
      addNote () {
        this.$store.dispatch('addNote')
        this.$store.state.index = this.$store.state.notes.length - 1
      },
      toggleFavorite () {
        if (this.$store.state.notes.length === 0) {
          return
        } else {
          this.$store.dispatch('toggleFavorite')
        }
      },
      deleteNote () {
        if (this.$store.state.notes.length === 1) {
          return
        } else {
          this.$store.state.index = this.$store.state.notes.length - 1
          this.$store.dispatch('deleteNote')
        }
      }
    }
  }
</script>
