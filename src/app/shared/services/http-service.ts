import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {subscribeToPromise} from 'rxjs/internal-compatibility';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private firestore: AngularFirestore, private httpClient: HttpClient, private router: Router) {

  }

  public firebaseGet(_Table: string): Observable<any> {
    return this.firestore.collection(_Table)
      .snapshotChanges();
  }

  public firebaseGetByID(_Table: string, _ID: string): Observable<any> {
    return this.firestore.collection(_Table)
      .doc(_ID)
      .valueChanges();
  }

  public firebaseCreate(_Table: string, _Value: any): any {
    return this.firestore.collection(_Table)
      .add(JSON.parse(JSON.stringify(_Value)));
  }

  public firebaseUpdate(_Table: string, _ID: string, _Value: any): any {
    return this.firestore.doc(_Table + '/' + _ID)
      .update(JSON.parse(JSON.stringify(_Value)));
  }

  public firebaseDelete(_Table: string, _ID: string): any {
    return this.firestore.doc(_Table + '/' + _ID)
      .delete();
  }
}
