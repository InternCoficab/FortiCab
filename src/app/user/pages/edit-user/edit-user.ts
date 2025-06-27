import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.html',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class EditUserComponent implements OnInit {
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe(user => this.user = user);
  }

  updateUser() {
    if (!this.user) return;
    this.userService.updateUser(this.user.id, this.user).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
