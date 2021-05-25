import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { SharedModule } from 'app/shared/shared.module';
import { SearchByCmndComponent } from './components/search-by-cmnd/search-by-cmnd.component';
import { SearchXeComponent } from './components/search-xe/search-xe.component';
@NgModule({
  declarations: [ReportComponent, SearchByCmndComponent, SearchXeComponent],
  imports: [CommonModule, SharedModule],
  exports: [ReportComponent],
})
export class ReportModule {}
