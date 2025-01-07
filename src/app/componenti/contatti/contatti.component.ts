import { FirebaseService } from './../../servizi/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatti',
  standalone: false,

  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css',
})
export class ContattiComponent implements OnInit {
  persone: any;
  persona: any;
  isProfile!: boolean;

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService
      .getPersone(
        'https://corso-angular-8f15d-default-rtdb.europe-west1.firebasedatabase.app/persone.json'
      )
      .subscribe((data: any) => {
        this.persone = Object.keys(data).map((key) => {
          data[key].id = key;
          return data[key];
        });
        console.log(this.persone);
      });
  }

  onDeletePersona(id: string) {
    this.firebaseService
      .deletePersona(
        'https://corso-angular-8f15d-default-rtdb.europe-west1.firebasedatabase.app/persone',
        id
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
