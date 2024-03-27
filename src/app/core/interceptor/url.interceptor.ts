import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginService } from '../service/login.service';

export const urlInterceptor: HttpInterceptorFn = (req, next) => {
    let url = req.url;  // buraya gelen requestin url'ini alıyoruz.
    let headers = req.headers;
    let loginService = inject(LoginService);
    if (!url.startsWith('/assets/')) {
    url = 'http://localhost:8080/api/v1' + url; 
    headers = headers.append('Authorization', 'Bearer ' + loginService.token)
  } // eğer url '/assets/' ile başlamıyorsa
  let newReq = req.clone({
    url, // yeni requestin url'ini de bizim url'imiz yaptık.
    headers,
  }); // req, read only olduğu için clone'unu çıkarıyoruz.
  return next(newReq);
};
