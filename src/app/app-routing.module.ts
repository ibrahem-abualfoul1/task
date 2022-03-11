import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path: '',
    component: AboutusComponent
    },{
path: 'aboutus',
component : AboutusComponent

}
,
{
  path: 'contactus',
  component: ContactusComponent
  }
,{
  path: 'security',
  loadChildren : () =>
  import('./auth/auth.module').then((m) => m.AuthModule)
  }
  ]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
