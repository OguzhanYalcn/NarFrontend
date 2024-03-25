import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yazilim-ilan',
  templateUrl: './yazilim-ilan.component.html',
  styleUrl: './yazilim-ilan.component.scss'
})
export class YazilimIlanComponent {

  constructor(
    public router: ActivatedRoute
  ) {}

}
