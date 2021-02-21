import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import { GlobalService } from '../services/global/global.service';

@Injectable()
export class BearerInterceptor implements HttpInterceptor {

  constructor(private globalService: GlobalService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    request = request.clone({
      setHeaders: { Authorization: `Bearer 123` }
    });

    this.globalService.setSpinnerState(true);

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('ok');
          }
        }, 
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            console.log('error', err.status);
          }
        },
        () => {
          console.log('finally');
        }
      ),
      finalize(() => this.globalService.setSpinnerState(false)),
    );
  }
}
