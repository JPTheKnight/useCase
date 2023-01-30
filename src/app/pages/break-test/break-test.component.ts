import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakTestHistory } from '../../entities/break-test-entity/break-test.reducer';
import { BreakTestMiddlewareService } from 'src/app/entities/break-test-entity/break-test.middleware.service';

@Component({
  selector: 'app-break-test',
  templateUrl: './break-test.component.html',
  styleUrls: ['./break-test.component.scss'],
})
export class BreakTestComponent implements OnInit {
  constructor(private middle: BreakTestMiddlewareService) {}

  dataSource?: BreakTestHistory[];
  displayedColumns: string[] = [
    'id',
    'Cycle',
    'Result',
    'Test_At',
    'Message',
    'BMS_Max_i',
    'Left_Max_i',
    'Right_Max_i',
  ];
  subscriptions?: Subscription[];

  ngOnInit(): void {
    const sub = this.middle.getBTDataFromStore().subscribe((data) => {
      if (data.length === 0) {
        this.middle.initializeStore();
      } else {
        this.dataSource = data;
      }
    });
    this.subscriptions?.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach((elt) => elt.unsubscribe());
  }
}
