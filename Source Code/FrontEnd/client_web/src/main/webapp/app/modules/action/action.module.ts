import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XacNhanDangKiComponent } from './components/xac-nhan-dang-ki/xac-nhan-dang-ki.component';
import { ThemBienBanComponent } from './components/them-bien-ban/them-bien-ban.component';
import { ActionComponent } from './action.component';
import { SharedModule } from 'app/shared/shared.module';
import { ThemLoiViPhamComponent } from './components/them-loi-vi-pham/them-loi-vi-pham.component';
import { TongTienComponent } from './components/tong-tien/tong-tien.component';
import { CardDangKiComponent } from './components/card-dang-ki/card-dang-ki.component';

@NgModule({
  declarations: [
    XacNhanDangKiComponent,
    ThemBienBanComponent,
    ActionComponent,
    ThemLoiViPhamComponent,
    TongTienComponent,
    CardDangKiComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [ActionComponent],
})
export class ActionModule {}
