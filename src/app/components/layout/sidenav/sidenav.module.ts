import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { SidenavItemComponent } from '../sidenav-item/sidenav-item.component';
import { SidenavHeaderComponent } from '../sidenav-header/sidenav-header.component';
import { SidenavHeaderModule } from '../sidenav-header/sidenav-header.module';
import { SidenavItemModule } from '../sidenav-item/sidenav-item.module';

@NgModule({
  declarations: [
    SidenavComponent,
    //SidenavItemComponent,
    //SidenavHeaderComponent,
  ],
  imports: [CommonModule, SidenavHeaderModule, SidenavItemModule],
  exports: [SidenavComponent],
})
export class SidenavModule {}
