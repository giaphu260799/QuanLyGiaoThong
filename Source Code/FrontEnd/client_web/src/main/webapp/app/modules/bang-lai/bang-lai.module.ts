import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BangLaiComponent } from './bang-lai.component';
import { SharedModule } from 'app/shared/shared.module';
import { SearchBangLaiComponent } from './components/search-bang-lai/search-bang-lai.component';
import { InsertBangLaiComponent } from './components/insert-bang-lai/insert-bang-lai.component';
import { UpdateBangLaiComponent } from './components/update-bang-lai/update-bang-lai.component';
@NgModule({
  declarations: [BangLaiComponent, SearchBangLaiComponent, InsertBangLaiComponent, UpdateBangLaiComponent],
  imports: [CommonModule, SharedModule],
  exports: [BangLaiComponent],
})
export class BangLaiModule {}
