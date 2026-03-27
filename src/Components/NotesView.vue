<template>
    <div class="bg-white border border-purple-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div class="p-5">
        <h3 class="text-xl font-bold text-purple-900 mb-2">Note Title</h3>
        <p class="text-purple-700 leading-relaxed">
          This is where your note content goes. It has a nice purple tint to match your "MyNotes" theme.
        </p>
      </div>
  
      <div class="bg-purple-50 px-5 py-3 flex justify-end space-x-3 border-t border-purple-100">
        <button class="flex items-center text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit
        </button>
  
        <button class="flex items-center text-sm font-semibold text-red-500 hover:text-red-700 transition-colors">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Delete
        </button>
  
        <button class="bg-purple-700 text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-sm hover:bg-purple-800 hover:shadow-purple-500/20 transition-all">
          Save
        </button>
      </div>
    </div>
  </template>