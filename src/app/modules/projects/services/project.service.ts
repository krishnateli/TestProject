import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get('../../../assets/data/data.json')
      .pipe(catchError(this.handleError));
  }

  handleError(error: Response) {
    console.error(error);
    return observableThrowError(new AppError(error));
  }

}

export class AppError {
  constructor(public originalError?: any) { }
}
