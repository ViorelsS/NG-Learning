import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'viorelss-prova',
  templateUrl: 'prova.component.html',
  styleUrl: 'prova.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProvaComponent {}
