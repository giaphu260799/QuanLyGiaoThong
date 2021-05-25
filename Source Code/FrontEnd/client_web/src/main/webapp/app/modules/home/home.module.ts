import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ActionModule } from 'app/modules/action/action.module';
import { BangLaiModule } from 'app/modules/bang-lai/bang-lai.module';
import { ReportModule } from 'app/modules/report/report.module';
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, ActionModule, BangLaiModule, ReportModule],
})
export class HomeModule {}
