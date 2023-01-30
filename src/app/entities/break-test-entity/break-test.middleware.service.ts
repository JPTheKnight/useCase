import { Injectable } from '@angular/core';
import { BreakTestApiService } from './break-test.api.service';
import { Observable, tap } from 'rxjs';
import { BreakTestHistory } from './break-test.reducer';
import { Store } from '@ngrx/store';
import { State } from './break-test.reducer';
import { selectAllBreakTests } from 'src/app/reducers';
import { LoadBreakTest } from './break-test.actions';
import { BreakTestMapper } from './break-test.mapper';

@Injectable({
  providedIn: 'root',
})
export class BreakTestMiddlewareService {
  constructor(private api: BreakTestApiService, private store: Store<State>) {}

  getBTDataFromAPI(): Observable<BreakTestHistory[]> {
    return BreakTestMapper.fromJson(this.api.getBreakTestData());
  }

  getBTDataFromStore(): Observable<BreakTestHistory[]> {
    return this.store.select(selectAllBreakTests);
  }

  initializeStore() {
    this.getBTDataFromAPI().subscribe((data) => {
      return this.store.dispatch(LoadBreakTest({ breaktests: data }));
    });
  }
}
