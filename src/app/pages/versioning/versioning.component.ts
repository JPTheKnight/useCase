import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VersioningMiddlewareService } from 'src/app/entities/versioning-entity/versioning.middleware.service';
import { Versioning } from 'src/app/entities/versioning-entity/versioning.reducer';

@Component({
  selector: 'app-versioning',
  templateUrl: './versioning.component.html',
  styleUrls: ['./versioning.component.scss'],
})
export class VersioningComponent implements OnInit {
  constructor(private middle: VersioningMiddlewareService) {}

  dataSource?: Versioning[];
  displayedColumns: string[] = ['id', 'Name', 'Info'];
  subscriptions?: Subscription[];

  ngOnInit(): void {
    const sub = this.middle.getVDataFromStore().subscribe((data) => {
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
