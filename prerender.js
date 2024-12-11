import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { render } from './dist/entry-server.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Lee el template HTML
const template = readFileSync(resolve(__dirname, 'dist/index.html'), 'utf-8');

// Renderiza la app
const appHtml = render();

// Reemplaza el placeholder con el HTML de la app
const html = template.replace('<!--app-html-->', appHtml);

// Escribe el archivo final
writeFileSync(resolve(__dirname, 'dist/index.html'), html);
console.log('Pre-renderizado completado');
