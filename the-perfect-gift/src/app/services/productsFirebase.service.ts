import { inject, Injectable } from '@angular/core';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { collection, doc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Product } from '../components/types';

@Injectable({ providedIn: 'root' })
export class ProductsFirebase {
  firestore = inject(Firestore); // Inject Firestore instance
  productsCollection = collection(this.firestore, 'products');

  // Method to get products from Firebase
  getProducts(): Observable<Product[]> {
    return collectionData(this.productsCollection, {
      idField: 'id',
    }) as Observable<Product[]>;
  }

  getProductById(id: string): Observable<Product> {
    const productDoc = doc(this.firestore, `gift-products/010`); // Reference to the specific document
    return docData(productDoc, { idField: 'id' }) as Observable<Product>; // Fetch the document data
  }
}
