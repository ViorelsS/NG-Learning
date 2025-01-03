import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-prova',
  templateUrl: 'prova.component.html',
  styleUrl: 'prova.component.css',
})
export class ProvaComponent implements OnInit {
  @Output() mandaDatiEvento = new EventEmitter<string>();
  nome = 'Luca';
  constructor() {}

  ngOnInit(): void {}

  mandaDati(): void {
    this.mandaDatiEvento.emit(this.nome);
  }
}
