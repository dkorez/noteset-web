import { FolderAddComponent } from 'src/app/components/widget/folder-add/folder-add.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FolderComponent } from './views/folder/folder.component';
import { FolderListComponent } from './views/folder/folder-list/folder-list.component';
import { NoteCardComponent } from './components/widget/note-card/note-card.component';
import { NoteDetailsComponent } from './components/widget/note-details/note-details.component';
import { SidenavItemComponent } from './components/layout/sidenav-item/sidenav-item.component';
import { SidenavHeaderComponent } from './components/layout/sidenav-header/sidenav-header.component';
import { SidenavModule } from './components/layout/sidenav/sidenav.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NotesComponent } from './views/notes/notes.component';
import { NoteAddComponent } from './components/widget/note-add/note-add.component';
import { NoteFullComponent } from './views/note-full/note-full.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FolderComponent,
    FolderListComponent,
    FolderAddComponent,
    NoteCardComponent,
    NoteDetailsComponent,
    NotesComponent,
    NoteAddComponent,
    NoteFullComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    SidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
