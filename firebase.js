import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyB5lzFZb9cwZKK3uVcXpRpo4G9xZR3hPew',
	authDomain: 'catpages-dw.firebaseapp.com',
	projectId: 'catpages-dw',
	storageBucket: 'catpages-dw.appspot.com',
	messagingSenderId: '754732445323',
	appId: '1:754732445323:web:e0820a01739afad38dee8e',
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export {db, storage};
