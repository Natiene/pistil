import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyAxOdsikcexRtdl7zR9xWKW5KHY4LdL-fo',
    authDomain: 'pistil-frontend.firebaseapp.com',
    databaseURL: 'https://pistil-frontend-default-rtdb.firebaseio.com',
    projectId: 'pistil-frontend',
    storageBucket: 'pistil-frontend.appspot.com',
    messagingSenderId: '72238565273',
    appId: '1:72238565273:web:e2f159c380b03da86ff508',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
    
export { database };
