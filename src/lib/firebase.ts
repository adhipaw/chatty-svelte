import { browser } from '$app/environment';
import { type Analytics, initializeAnalytics } from 'firebase/analytics';
import { initializeApp, type FirebaseApp } from 'firebase/app';
import { initializeAuth, type Auth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
	apiKey: 'AIzaSyCTRz1065TKcdwFufc6ydjygULa1p_5SYk',
	authDomain: 'chatty-56caf.firebaseapp.com',
	projectId: 'chatty-56caf',
	storageBucket: 'chatty-56caf.appspot.com',
	messagingSenderId: '364832799883',
	appId: '1:364832799883:web:1dde9fb62505e03dc7e88e',
	measurementId: 'G-RRR8BVY2H0'
};

let app: FirebaseApp | undefined;
let analytics: Analytics | undefined;
let auth: Auth | undefined;

export default function getApp() {
	if (app) return app;
	if (browser) {
		app = initializeApp(firebaseConfig);
		return app;
	}
	return;
}
export function getAuth() {
	if (!app) return;
	if (auth) return auth;
	if (browser) {
		initializeAuth(app);
		return auth;
	}
	return;
}
export function getAnalytics() {
	if (!app) return;
	if (analytics) return analytics;
	if (browser) {
		analytics = initializeAnalytics(app);
		return analytics;
	}
	return;
}

// Initialize Firebase
