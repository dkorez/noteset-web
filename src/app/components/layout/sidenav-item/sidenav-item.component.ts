import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent implements OnInit {
  @Input() link: string | undefined;
  @Input() icon: string | undefined;
  @Input() title: string | undefined;

  constructor() { }

  ngOnInit() {
  }

}
