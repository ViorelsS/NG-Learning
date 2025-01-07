import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  sottoscrizione: any;

  ngOnInit(): void {
    this.sottoscrizione = interval(1000).subscribe((numero) =>
      console.log(numero)
    );
  }

  ngOnDestroy(): void {
    this.sottoscrizione.unsubscribe();
  }
}
