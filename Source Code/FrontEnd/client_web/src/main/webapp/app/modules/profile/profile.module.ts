import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { SharedModule } from 'app/shared/shared.module';
import { InformationComponent } from './components/information/information.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
@NgModule({
  declarations: [ProfileComponent, InformationComponent, ChangePasswordComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProfileComponent],
})
export class ProfileModule {}
