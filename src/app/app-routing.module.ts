
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'registration',
      component: RegisterComponent
    },
    {
      path: 'user',
      component: UserComponent
    },
    {
      path: 'practice',
      component: ParentComponent
    },
    {
      path: '**',
      component: NotFoundComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
