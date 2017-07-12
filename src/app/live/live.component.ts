import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.sass']
})
export class LiveComponent implements OnInit {

  live: any;

  constructor(firebaseService: FirebaseService) { 
    firebaseService.getLive().subscribe(
        data => { 
          this.live = data;
      },
        err => console.log(err),
        () =>  console.log('Carga del live completa')
    );
  }

  ngOnInit() {
  }

}
