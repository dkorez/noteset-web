import { NoteFullComponent } from './views/note-full/note-full.component';
import { FolderComponent } from './views/folder/folder.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './views/notes/notes.component';

const routes: Routes = [
  { path: '', component: FolderComponent },
  { path: 'folder', component: FolderComponent },
  { path: 'folder/:id', component: FolderComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'notes/:id', component: NotesComponent },
  { path: 'notes/note/:guid', component: NoteFullComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
