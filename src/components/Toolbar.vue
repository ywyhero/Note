<template>
  <div id="toolbar">
    <i @click="addClick" class="glyphicon glyphicon-plus"></i>
    <i @click="favoriteNote" :class="{starred: activeNote.favorite}" class="glyphicon glyphicon-star"></i>
    <i @click="removeClick" class="glyphicon glyphicon-remove"></i>
  </div>
</template>
<script>
  import{ mapGetters, mapActions } from 'vuex'
  export default {
    computed:{
      ...mapGetters({
        notes: 'getNotes',
        dIndex: 'getIndex',
        activeNote: 'getActiveNote'
      })
    },
    methods:{
      ...mapActions({
        addNote: 'addNote',
        changeIndex: 'changeIndex',
        removeNote: 'removeNote',
        favoriteNote: 'favoriteNote'
      }),
      addClick(){
         this.addNote(this.notes.length)
      },
      removeClick(){
        this.removeNote();

      }
    }
  }
</script>
