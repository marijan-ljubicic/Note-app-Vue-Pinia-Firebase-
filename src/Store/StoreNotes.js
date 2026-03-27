import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStoreNotes = defineStore('storeNotes', () => {
  // 1. STATE (The Data)
  const notes = ref([
    {
      id: Date.now(),
      content: '',
      isEditing: false
    }
  ])

  // 2. ACTIONS (The Functions)
  const handleSave = (note, index) => {
    if (!note.content.trim()) return 
    note.isEditing = false 
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
    if (notes.value.length === 1) {
      notes.value[0].content = ''
      notes.value[0].isEditing = true
      return
    }
    notes.value = notes.value.filter(n => n.id !== id)
  }

  // 3. GETTERS (The Stats)
  const totalNotesCount = computed(() => notes.value.length)
  
  const totalCharactersCount = computed(() => {
    let count = 0
    notes.value.forEach(note => {
      count += note.content.length
    })
    return count
  })

  return { 
    notes, 
    handleSave, 
    deleteNote, 
    totalNotesCount, 
    totalCharactersCount 
  }
})