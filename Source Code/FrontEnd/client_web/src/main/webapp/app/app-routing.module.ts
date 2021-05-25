import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/modules/home/home.component';
import { LogInComponent } from 'app/modules/login/log-in.component';
import { AuthGuard } from 'app/blocks/guard/auth.guard';
import { LoginGuard } from 'app/blocks/guard/login.guard';
import { ReportComponent } from 'app/modules/report/report.component';
import { BangLaiComponent } from 'app/modules/bang-lai/bang-lai.component';
import { ProfileComponent } from 'app/modules/profile/profile.component';
import { ActionComponent } from 'app/modules/action/action.component';
const routes: Routes = [
  {
    path: 'action',
    canActivate: [AuthGuard],
    component: ActionComponent,
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
  },
  {
    path: 'BangLai',
    canActivate: [AuthGuard],
    component: BangLaiComponent,
  },
  {
    path: 'Profile',
    canActivate: [AuthGuard],
    component: ProfileComponent,
  },
  {
    path: 'Login',
    canActivate: [LoginGuard],
    component: LogInComponent,
  },
  {
    path: 'report',
    canActivate: [AuthGuard],
    component: ReportComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
