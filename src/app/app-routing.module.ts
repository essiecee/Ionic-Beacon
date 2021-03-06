import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DynamichistoryComponent } from '../app/dynamichistory/dynamichistory.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'bluetooth', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'form', loadChildren: './form/form.module#FormPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'history', loadChildren: './history/history.module#HistoryPageModule' },
  { path: 'bluetooth', loadChildren: './bluetooth/bluetooth.module#BluetoothPageModule' },
  { path: 'run', loadChildren: './run/run.module#RunPageModule' },
  { path: 'summary', loadChildren: './summary/summary.module#SummaryPageModule' },
  { path: 'notes', loadChildren: './notes/notes.module#NotesPageModule' },
  { path: 'history/:slug', component: DynamichistoryComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
