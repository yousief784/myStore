import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  fullName: string;
  total: number;
  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.fullName = ''
    this.total = 0
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
        console.log(params);
        this.fullName = params['name'];
        this.total = params['total']
      })
  }
}
