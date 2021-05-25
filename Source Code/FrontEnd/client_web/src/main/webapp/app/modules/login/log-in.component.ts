import { UserService } from './../../core/services/user.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/services/auth.service';
import { CanBo } from 'app/models/uitil.model';
@Component({
  selector: 'jhi-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  user_name = '';
  pass_word = '';
  visible = false;
  constructor(private router: Router, private authService: AuthService, private userService: UserService) {}
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.Login();
    }
  }

  Login(): void {
    if (this.user_name.length && this.pass_word.length) {
      this.userService.getTaikhoan(new CanBo(this.user_name, this.pass_word)).subscribe(data => {
        if (data) {
          this.authService.login();
          location.reload();
          localStorage.setItem('userInfo', JSON.stringify(data));
        } else {
          this.visible = true;
        }
      });
    } else {
      this.visible = true;
    }
  }
  ngOnInit(): void {}
}
