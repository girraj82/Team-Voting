import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: 'AIzaSyDvL69RsECxOpvzGu5C6ZSoJVO4mQkTJQI',
  authDomain: 'team-voting-app-ed0bb.firebaseapp.com',
  databaseURL: 'https://team-voting-app-ed0bb-default-rtdb.firebaseio.com',
  projectId: 'team-voting-app-ed0bb',
  storageBucket: 'team-voting-app-ed0bb.appspot.com',
  messagingSenderId: '447933454624',
  appId: '1:447933454624:web:0d9afa31503c41b8b7df45',
  measurementId: 'G-KTKHCPN3PL',

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
