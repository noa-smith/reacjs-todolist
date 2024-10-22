import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps:  
  {  // Add this to fix the fsevents issue
     exclude: ['fsevents']
   }
})
