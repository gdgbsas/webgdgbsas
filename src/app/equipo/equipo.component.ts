import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.sass']
})
export class EquipoComponent implements OnInit {

  equipo: any;

  constructor(firebaseService: FirebaseService) { 
    firebaseService.getEquipo().subscribe(
        data => { 
          this.equipo = data;
      },
        err => console.log(err),
        () =>  console.log('Carga del equipo completa')
    );
  }

  ngOnInit() {
  }

}
