import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Установите папку src как корень проекта
  build: {
    outDir: '../dist', // Укажите выходную директорию для сборки (например, dist)
    emptyOutDir: true, // Очистить выходную директорию перед сборкой
  },
  server: {
    open: true, // Открыть браузер при запуске сервера
  },
});
