// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyA9Y4RMSeRkcsrq8izkQprQ1mcj8IkLsPs",
  authDomain: "legal-pwa-test-01.firebaseapp.com",
  databaseURL: "https://legal-pwa-test-01.firebaseio.com",
  projectId: "legal-pwa-test-01",
  storageBucket: "legal-pwa-test-01.appspot.com",
  messagingSenderId: "261285297076",
  appId: "1:261285297076:web:26102c3178baf333d710e1",
  measurementId: "G-947WSGXX92"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// // Handle incoming messages. Called when:
// // - a message is received while the app has focus
// // - the user clicks on an app notification created by a service worker
// //   `messaging.setBackgroundMessageHandler` handler.
// messaging.onMessage((payload) => {
//   console.log('Message received. ', payload);
//   // ...
// });