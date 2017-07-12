import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  private equipo: FirebaseListObservable<any[]>;
  private live: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) { 
    this.equipo = db.list('/equipo');
    this.live = db.list('/live');
  }

  getEquipo() {
    return this.equipo;
  }

  getLive() {
    return this.live;
  }
}
