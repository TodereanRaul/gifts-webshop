import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

// Import the Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Import AngularFire functions
import { provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBTvm1qPHqKRTW-hd9-DXm2NqSZrN7BP1Y',
  authDomain: 'perfect-gift-78513.firebaseapp.com',
  projectId: 'perfect-gift-78513',
  storageBucket: 'perfect-gift-78513.firebasestorage.app',
  messagingSenderId: '669765197614',
  appId: '1:669765197614:web:8a521da3aca2313de8e4bf',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    // Provide Firebase and Firestore directly in the providers array
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
};
