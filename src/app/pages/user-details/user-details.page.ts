import { UserService } from './../../services/api/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  user: any;
  id: string;
  first: string;
  last: string;
  company: string;
  country: string;
  userId: any;
  params;

  constructor(private router: Router, private activateRoute: ActivatedRoute) {}
  ngOnInit() {
    //...
    this.user = this.activateRoute.params.subscribe((params) => {
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this.id = params['id'];
      //array of json
      console.log(JSON.parse(this.user));
    });
  }
}
