import { defineConfig } from '@midwayjs/hooks-kit';
import react from '@vitejs/plugin-react';

export default defineConfig({
  vite: {
    plugins: [react()],
  },
});
