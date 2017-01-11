<template>
  <div id="note-editor">
    <textarea :value="noteText" @input="editorNote" class="form-control"></textarea>
  </div>
</template>
<script>
  export default {
    computed: {
      noteText () {
        return this.$store.state.activeNote.text
      }
    },
    methods: {
      editorNote (e) {
        this.$store.dispatch('editorNote', e)
      }
    }
  }
</script>
