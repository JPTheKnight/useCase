import { Injectable } from '@angular/core';
import breakTestData from '../../../assets/break-test-history-array.json';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakTestApiService {
  constructor() {}

  getBreakTestData(): Observable<any[]> {
    return of(breakTestData);
  }
}
