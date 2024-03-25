import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-yazilim-ilan-ver',
  templateUrl: './yazilim-ilan-ver.component.html',
  styleUrl: './yazilim-ilan-ver.component.scss'
})
export class YazilimIlanVerComponent {

  ilanForm = this.fb.group({
    isim: '',
    soyisim: '',
    yazilimDili: 0,
    isTanimi: '',
    sure: '',
    ucret: '', 
  });

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
  ){}

  submit() {
    console.log(this.ilanForm.value);
    this.toastr.success('Deneme mesajı');
  }

}
