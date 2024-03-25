import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-denemeler',
  templateUrl: './denemeler.component.html',
  styleUrl: './denemeler.component.scss'
})
export class DenemelerComponent {
  observable : Observable<string> | undefined;
  promise : Promise<string> | undefined;
  observableSubscription : Subscription | undefined;

  yarat() {
    this.observable = new Observable<string>(observer => {
      console.log('Observer olusturuldu ve degerleri verildi');
      setTimeout(() => {
        observer.next('Observer next metodu çağırıldı');
        observer.next('Observer next metodu çağırıldı 2');
        observer.complete(); 
        // artık devamında next çağırılmayacak, artık devamında 
        // bilgi verilmeyecek anlamına geliyor.
      }
      , 2000
      );
    });
    this.promise = new Promise<string>(resolve => {
      console.log('Promise olusturuldu ve degerleri verildi');
      resolve('Promise resolve çağırıldı')
      resolve('Promise resolve çağırıldı2')
    })
  }
  aboneOl() {
    this.observableSubscription = this.observable?.subscribe({
      next: (data) => {
        console.log('aboneOl: ',data);
      },
      complete: () => {

      }
    })
    this.promise?.then(data => {
      console.log('aboneOl promise: ', data);
    })
  }
  abonelikKaldir() {
    this.observableSubscription?.unsubscribe();
  }
}