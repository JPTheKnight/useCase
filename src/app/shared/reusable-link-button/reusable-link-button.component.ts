import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-link-button',
  templateUrl: './reusable-link-button.component.html',
  styleUrls: ['./reusable-link-button.component.scss'],
})
export class ReusableLinkButtonComponent {
  constructor() {}

  @Input() title: string = '';
  @Input() link: string = '';

  ngOnInit(): void {}
}
