<template>
    <nav class="bg-purple-100 shadow-md py-4 px-6 sticky top-0 z-50">
      <div class="container mx-auto flex items-center justify-between">
        <h1 class="text-2xl font-bold text-purple-800 antialiased font-sans md:text-3xl">MyNotes</h1>
        
        <div class="hidden md:flex items-center space-x-6">
          <RouterLink 
            to="/" 
            class="px-4 py-2 text-lg font-medium antialiased font-sans text-purple-800 hover:bg-purple-700 hover:text-white rounded-md transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-purple-500/25"
          >
            Notes
          </RouterLink>
          <RouterLink 
            to="/stats" 
            class="px-4 py-2 text-lg font-medium antialiased font-sans text-purple-800 hover:bg-purple-700 hover:text-white rounded-md transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-purple-500/25"
          >
            Stats
          </RouterLink>
        </div>
  
        <button 
          @click="showMobileMenu = !showMobileMenu"
          class="md:hidden p-1 text-purple-800 hover:text-purple-600 focus:outline-none"
        >
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!showMobileMenu" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
  
      <div 
        v-if="showMobileMenu" 
        class="md:hidden py-4 border-t border-purple-200 bg-purple-50"
      >
        <div class="flex flex-col items-center space-y-3 px-4">
          <RouterLink 
            to="/" 
            @click="showMobileMenu = false"
            class="px-4 py-2 text-lg font-medium antialiased font-sans text-purple-800 hover:bg-purple-700 hover:text-white rounded-md transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-purple-500/25 w-full text-center"
          >
            Notes
          </RouterLink>
          <RouterLink 
            to="/stats" 
            @click="showMobileMenu = false"
            class="px-4 py-2 text-lg font-medium antialiased font-sans text-purple-800 hover:bg-purple-700 hover:text-white rounded-md transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-purple-500/25 w-full text-center"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const showMobileMenu = ref(false)
  </script>