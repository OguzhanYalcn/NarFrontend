import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { YazilimIlanService } from '../service/yazilim-ilan.service';

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
    private yazilimIlanService: YazilimIlanService,
  ){}

  submit() {
    this.yazilimIlanService.yazilimIlanVer(this.ilanForm.value).subscribe({
      next: (resp) => {
        this.toastr.success('Yazılım İlanı Oluşturulmuştur!');
      },
      error: (err) => {
        console.log(err)
        this.toastr.error('Hata Oluştu!');
      }
    });
  }

}
