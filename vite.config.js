import { defineConfig } from "vite";
import path from 'path'

export default defineConfig( {
    base: "/academia/", 
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          inteligencia_artificial: path.resolve(__dirname, 'inteligencia_artificial.html'),
          quienes_somos: path.resolve(__dirname, 'quienes_somos.html'),
          desarrollo_fullstack: path.resolve(__dirname, 'desarrollo_fullstack.html'),
          blog_noticias: path.resolve(__dirname, 'blog_noticias.html'),
          blog_noticias_1: path.resolve(__dirname, 'blog_noticias_1.html'),
          location: path.resolve(__dirname, 'location.html'),
          
        },
    },
  },
})