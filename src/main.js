import './style.css';
import { slugify } from './slugify.js';

const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';
const slugResult = document.querySelector('#slug-result');
const apiResult = document.querySelector('#api-result');

slugResult.textContent = slugify('My first site with CI');
apiResult.textContent = apiUrl;
