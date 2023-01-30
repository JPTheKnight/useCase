import { Observable, map, of } from 'rxjs';
import { Versioning } from './versioning.reducer';

export class VersioningMapper {
  constructor() {}

  static fromJson(response: Observable<any[]>): Observable<Versioning[]> {
    return response.pipe<any[]>(
      map((data) =>
        data.map((elt: { position: number; name: string; info: string }) => ({
          id: elt.position,
          Name: elt.name,
          Info: elt.info,
        }))
      )
    );
  }
}
