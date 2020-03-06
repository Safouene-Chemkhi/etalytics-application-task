import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public posts;
  constructor(public rest: RestService) {
    rest.get_posts().subscribe(res => {
      this.posts = res;
      console.log(res);
    })
  }



  ngOnInit(): void {
  }
}
