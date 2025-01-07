import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../servizi/firebase.service';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  homeform!: FormGroup;

  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      color: new FormControl(),
    });
  }

  onSubmit() {
    console.log(this.homeform);

    this.firebase
      .insertPersona(
        'https://corso-angular-8f15d-default-rtdb.europe-west1.firebasedatabase.app/persone.json',
        {
          nome: this.homeform.value.nome,
          email: this.homeform.value.email,
          color: this.homeform.value.color,
        }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  onDeletePersona() {
    this.firebase
      .deletePersona(
        'https://corso-angular-8f15d-default-rtdb.europe-west1.firebasedatabase.app/persone',
        '-OG04hdvfuKfcc10DgvG'
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
