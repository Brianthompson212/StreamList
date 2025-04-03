// public/service-worker.js
self.addEventListener('install', event => {
    console.log('Service Worker installing.');
    // Perform install steps like caching static assets here
  });
  
  self.addEventListener('activate', event => {
    console.log('Service Worker activating.');
  });
  
  self.addEventListener('fetch', event => {
    // Optionally handle fetch events
  });
  