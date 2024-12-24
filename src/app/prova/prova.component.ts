import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-prova',
  templateUrl: 'prova.component.html',
  styleUrl: 'prova.component.css',
})
export class ProvaComponent implements OnInit {
  isDisabled = false;
  immagine = '';
  immagine1 =
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg';
  immagine2 = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    let counter = 0;
    setInterval(() => {
      if (counter % 2 === 0) {
        this.immagine = this.immagine1;
      } else {
        this.immagine = this.immagine2;
      }
      counter++;

      this.isDisabled = !this.isDisabled;
      console.log(this.isDisabled);
    }, 1000);
  }
}
