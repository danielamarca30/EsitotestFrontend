import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';
import serveStatic from 'serve-static';
import { render } from './dist/server/entry-server.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Habilitar compresión gzip
app.use(compression());

// Servir archivos estáticos
app.use(serveStatic(path.resolve(__dirname, 'dist/client')));

// Template HTML
const template = fs.readFileSync(
  path.resolve(__dirname, 'dist/client/index.html'),
  'utf-8'
);

app.use('*', async (req, res) => {
  try {
    const appHtml = render();
    
    const html = template.replace('<!--app-html-->', appHtml);
    
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (e) {
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
