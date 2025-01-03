import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-prova',
  templateUrl: 'prova.component.html',
  styleUrl: 'prova.component.css',
})
export class ProvaComponent implements OnInit, OnChanges {
  @Input() data: any;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log(this.data);
  }
}
