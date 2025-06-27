import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.html',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class CreateUserComponent {
  user: Partial<User> = {};

  constructor(private userService: UserService, private router: Router) {}

  createUser() {
    this.userService.createUser(this.user as User).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
