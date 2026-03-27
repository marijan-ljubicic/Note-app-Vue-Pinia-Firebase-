<template>
    <div class="p-6 max-w-3xl mx-auto">
      <div class="bg-white border border-purple-100 rounded-xl shadow-sm overflow-hidden">
        
        <div class="bg-purple-700 px-6 py-3">
          <h2 class="text-white font-bold text-lg antialiased font-sans">App Statistics</h2>
        </div>
  
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-purple-50 border-b border-purple-100">
              <th class="px-6 py-3 text-sm font-bold text-purple-800 uppercase tracking-wider">Stat</th>
              <th class="px-6 py-3 text-sm font-bold text-purple-800 uppercase tracking-wider text-right">Value</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-purple-50">
            <tr class="hover:bg-purple-50/50 transition-colors">
              <td class="px-6 py-4 text-purple-900 font-medium">Number of notes</td>
              <td class="px-6 py-4 text-purple-700 font-bold text-right">{{ storeNotes.totalNotesCount }}</td>
            </tr>
            
            <tr class="hover:bg-purple-50/50 transition-colors">
              <td class="px-6 py-4 text-purple-900 font-medium">Number of characters (All notes)</td>
              <td class="px-6 py-4 text-purple-700 font-bold text-right">{{ storeNotes.totalCharactersCount }}</td>
            </tr>
          </tbody>
        </table>
  
      </div>
    </div>
  </template>

  <script setup>
  import { useStoreNotes } from '@/Store/StoreNotes' // Import your store
  
  const storeNotes = useStoreNotes() // Initialize store access
  </script>