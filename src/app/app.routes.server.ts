import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'student/:id',
    renderMode: RenderMode.Client // This tells Angular: "Don't try to build this at compile time!"
  },
  {
    path: '**', // All other routes (home, students, etc.)
    renderMode: RenderMode.Prerender
  }
];