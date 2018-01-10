<template>
  <div id="note-editor">
    <textarea class="form-control" v-model="activeNote.text" @change="handleChange"></textarea>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        activeNote: 'getActiveNote'
      }),
    
    },
    methods:{
      ...mapActions({
        editeNote: 'editeNote'
      }),
      handleChange(){
        let text = this.activeNote.text
        this.editeNote(text)
      }
    }
  }
</script>
