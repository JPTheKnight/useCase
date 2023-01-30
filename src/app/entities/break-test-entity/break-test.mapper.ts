import { Observable, map, of } from 'rxjs';
import { BreakTestHistory } from './break-test.reducer';

export class BreakTestMapper {
  constructor() {}

  static fromJson(response: Observable<any[]>): Observable<BreakTestHistory[]> {
    return response.pipe<any[]>(
      map((data) =>
        data.map(
          (elt: {
            id: number;
            cycle: number;
            result: boolean;
            test_at: string;
            message: string;
            bms_max_i: string;
            left_max_i: string;
            right_max_i: string;
          }) => ({
            id: elt.id,
            Cycle: elt.cycle,
            Result: elt.result,
            Test_At: elt.test_at,
            Message: elt.message,
            BMS_Max_i: elt.bms_max_i,
            Left_Max_i: elt.left_max_i,
            Right_Max_i: elt.right_max_i,
          })
        )
      )
    );
  }
}
