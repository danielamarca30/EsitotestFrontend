import { h } from 'preact';
import { renderToStringAsync } from 'preact-render-to-string';
import { App } from './App';

export async function render() {
  return await renderToStringAsync(<App />);
}
