import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { Translate } from './pipes/translate.pipe';
import { PageLayoutComponent } from './layout/page-layout/page-layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentLayoutComponent } from './layout/component-layout/component-layout.component';
import { ValueRequireComponent } from './components/value-require/value-require.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ValueRequireComponent, ComponentLayoutComponent, HeaderComponent, PageLayoutComponent, DropDownComponent, Translate],
  imports: [CommonModule, RouterModule, TranslateModule, MatProgressSpinnerModule],
  exports: [
    ValueRequireComponent,
    ComponentLayoutComponent,
    HeaderComponent,
    PageLayoutComponent,
    DropDownComponent,
    TranslateModule,
    Translate,
    FormsModule,
  ],
})
export class SharedModule {}
