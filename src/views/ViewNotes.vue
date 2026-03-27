<template>
    <div class="p-6 max-w-3xl mx-auto space-y-8">
      
      <div 
        v-for="(note, index) in notes" 
        :key="note.id" 
        class="bg-white border border-purple-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
      >
        
        <div class="p-4">
          <textarea
            v-model="note.content"
            :disabled="!note.isEditing"
            class="w-full h-40 p-4 text-lg text-purple-900 placeholder-purple-300 transition-all duration-200 resize-none antialiased font-sans rounded-lg"
            :class="note.isEditing ? 'bg-white border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-200' : 'bg-transparent border-transparent cursor-not-allowed'"
            placeholder="Write your note here..."
          ></textarea>
        </div>
  
        <div class="bg-purple-100/50 px-5 py-4 flex justify-end items-center space-x-3 border-t border-purple-100">
          
          <button 
            @click="note.isEditing = true"
            class="px-4 py-2 text-sm font-bold text-purple-800 hover:bg-purple-700 hover:text-white rounded-md transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-purple-500/25"
          >
            Edit
          </button>
  
          <button 
            @click="deleteNote(note.id)"
            class="px-4 py-2 text-sm font-bold text-red-600 hover:bg-red-600 hover:text-white rounded-md transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-red-500/25"
          >
            Delete
          </button>
  
          <button 
            @click="handleSave(note, index)"
            class="px-4 py-2 text-sm font-bold text-purple-800 hover:bg-purple-700 hover:text-white rounded-md transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-purple-500/25"
          >
            Save
          </button>
          
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const notes = ref([
    {
      id: Date.now(),
      content: '',
      isEditing: true
    }
  ])
  
  const handleSave = (note, index) => {
    // 1. Don't do anything if the note is empty
    if (!note.content.trim()) return 
  
    // 2. Lock the current note
    note.isEditing = false 
  
    // 3. ONLY add a new card if this is the LAST card in the list
    const isLastNote = index === notes.value.length - 1
    
    if (isLastNote) {
      notes.value.push({
        id: Date.now(),
        content: '',
        isEditing: true
      })
    }
  }
  
  const deleteNote = (id) => {
    // Prevent deleting the last card if it's the only one
    if (notes.value.length === 1) {
      notes.value[0].content = ''
      notes.value[0].isEditing = true
      return
    }
    notes.value = notes.value.filter(n => n.id !== id)
  }
  </script>