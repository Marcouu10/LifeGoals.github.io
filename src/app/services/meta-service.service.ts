import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class MetaService {

  constructor(private firestore: AngularFirestore) { }


getMetas() {
    return this.firestore.collection('metas').snapshotChanges();
  }

addMeta(metaTexto: string) {
    return this.firestore.collection('metas').add({ meta: metaTexto });
  }

deleteMeta(id: string) {
    return this.firestore.collection('metas').doc(id).delete();
  }
}
