// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCTRz1065TKcdwFufc6ydjygULa1p_5SYk',
	authDomain: 'chatty-56caf.firebaseapp.com',
	projectId: 'chatty-56caf',
	storageBucket: 'chatty-56caf.appspot.com',
	messagingSenderId: '364832799883',
	appId: '1:364832799883:web:1dde9fb62505e03dc7e88e',
	measurementId: 'G-RRR8BVY2H0'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
