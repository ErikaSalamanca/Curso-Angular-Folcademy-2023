import { Injectable } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private moviesCollection: CollectionReference<DocumentData>;

  constructor(
    private firestore: Firestore
  ) { 
    this.moviesCollection = collection(this.firestore, 'movies')
    this.moviesCollection = collection(this.firestore, 'tv')
  }

  create(movie:any){
    return addDoc(this.moviesCollection, movie)
  }

  getAll(){
    return collectionData(this.moviesCollection) as Observable<any[]>;
  }

  // detele(id:number){
  //   const moviesDocumentReference = doc(this.firestore, 'movies')
  // }

  createSerie(tv:any){
    return addDoc(this.moviesCollection, tv)
  }

  getTv(){
    return collectionData(this.moviesCollection) as Observable<any[]>;
  }


 


  
}
