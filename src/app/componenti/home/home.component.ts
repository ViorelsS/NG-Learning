import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  // Per lavorare direttamente da qui, uso @ViewChild
  @ViewChild('homeform')
  homeform!: NgForm;

  sottoscrizione: any;

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(this.homeform);
  }
}
