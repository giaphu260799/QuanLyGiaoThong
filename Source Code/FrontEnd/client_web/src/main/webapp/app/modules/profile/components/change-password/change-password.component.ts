import { AuthService } from 'app/core/services/auth.service';
import { UserService } from 'app/core/services/user.service';
import { CanBo } from 'app/models/uitil.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  user: CanBo = new CanBo('', '');
  oldPass = '';
  newPass = '';
  again = '';
  visible = false;
  constructor(private userService: UserService, private auth: AuthService) {
    this.user = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('userInfo'))));
  }
  changePass(): void {
    if (this.oldPass && this.newPass && this.again) {
      this.visible = false;
      if (this.user.password === this.oldPass && this.newPass === this.again) {
        this.userService.changePassword(this.user, this.newPass).subscribe(data => {
          if (data) {
            alert('Đổi mật khẩu thành công');
            this.auth.logout();
            location.reload();
          } else {
            alert('Đổi mật khẩu không thành công');
          }
        });
      } else {
        alert('Password nhập không đúng');
      }
    } else {
      this.visible = true;
    }
  }
  ngOnInit(): void {}
}
