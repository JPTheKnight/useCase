import { Injectable } from '@angular/core';
import { VersioningApiService } from './versioning.api.service';
import { Observable } from 'rxjs';
import { Versioning } from './versioning.reducer';
import { Store } from '@ngrx/store';
import { State } from './versioning.reducer';
import { selectAllVersionings } from 'src/app/reducers';
import { LoadVersioning } from './versioning.actions';
import { VersioningMapper } from './versioning.mapper';

@Injectable({
  providedIn: 'root',
})
export class VersioningMiddlewareService {
  constructor(private api: VersioningApiService, private store: Store<State>) {}

  getVDataFromAPI(): Observable<Versioning[]> {
    return VersioningMapper.fromJson(this.api.getVersioningData());
  }

  getVDataFromStore(): Observable<Versioning[]> {
    return this.store.select(selectAllVersionings);
  }

  initializeStore() {
    this.getVDataFromAPI().subscribe((data) =>
      this.store.dispatch(LoadVersioning({ versionings: data }))
    );
  }
}
