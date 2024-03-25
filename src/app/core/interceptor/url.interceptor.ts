import { HttpInterceptorFn } from '@angular/common/http';

export const urlInterceptor: HttpInterceptorFn = (req, next) => {
    let url = req.url;  // buraya gelen requestin url'ini alıyoruz.
  if (!url.startsWith('/assets/')) {
    url = 'http://localhost:8080/api/v1' + url; 
  } // eğer url '/assets/' ile başlamıyorsa
  let newReq = req.clone({
    url, // yeni requestin url'ini de bizim url'imiz yaptık.
  }); // req, read only olduğu için clone'unu çıkarıyoruz.
  return next(newReq);
};
