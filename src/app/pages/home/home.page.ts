/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-shadow */
import { UserService } from './../../services/api/user.service';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  filterTerm: string;
  users: any;
  constructor(private UserService: UserService,private router: Router) {}

  ngOnInit(): void {
   this.getUsers();
  }
  getUsers() {
    this.UserService.fetchAllUsers().subscribe((data) => {
      this.users = data;
    });
  }
  getUserDetails(id) {
    this.router.navigate(['/user-details', id]);
  }
}
