import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';

import { API_URL } from 'src/environments/environment';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
}) 
export class PostComponent implements OnInit {
  @Input() post;
  comments: any;
  user: any;
  constructor(private rest: RestService) { 
  
  }

  ngOnInit(): void {
    this.rest.get_comments(this.post.id).subscribe(res => {
      this.comments = res;
    });

    this.rest
  }

  post_comment(comment){
    this.comments.push({
      name:"default user",
      email:"default.user@email.com",
      body:comment
    })
    this.rest.post_comment(this.post.id, this.comments);
  }

  openSnackBar(){

  }

  get_user(){
    this.rest.get_user(this.post.userId).subscribe(res =>{
      this.user = res;
    })
  }



}
