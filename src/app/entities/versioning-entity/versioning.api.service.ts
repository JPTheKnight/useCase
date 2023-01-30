import { Injectable } from '@angular/core';
import versioningData from '../../../assets/versioning-array.json';
import { Observable, of } from 'rxjs';
import { Versioning } from './versioning.reducer';

@Injectable({
  providedIn: 'root',
})
export class VersioningApiService {
  constructor() {}

  getVersioningData(): Observable<any[]> {
    return of(versioningData);
  }
}
