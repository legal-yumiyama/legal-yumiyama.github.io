if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('service_workers/sw.js')
           .then(function() { console.log("Service Worker Registered"); })
           .catch(function() { console.log("Service Worker Not Registered"); });
}