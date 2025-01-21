import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsFirebase {
  firestore = inject(Firestore); // Inject Firestore instance
  productsCollection = collection(this.firestore, 'products');

  // Method to get products from Firebase
  getProducts(): Observable<any[]> {
    return collectionData(this.productsCollection, {
      idField: 'id',
    }) as Observable<any[]>;
  }
}
